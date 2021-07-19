import { NextApiRequest, NextApiResponse } from 'next';

import { animesByCategory } from '@services/animeTv';

export default async function AnimesByCategory(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { name, currentPage, pageSize, maxPages } = req.query;

      if (!name) {
        return res.json({ message: 'The query "name" has not been defined.' });
      }

      const pagination = {
        currentPage: Number(currentPage) || 1,
        pageSize: Number(pageSize) || 12,
        maxPages: Number(maxPages) || 12,
      };

      const response = await animesByCategory(String(name), pagination);

      res.setHeader('x-total-count', response.totalItems);

      return res.send(response);
    } catch (error) {
      return res.json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

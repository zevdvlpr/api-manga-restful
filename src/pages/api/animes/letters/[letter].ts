import { NextApiRequest, NextApiResponse } from 'next';

import { animesByLatter } from '@services/animeTv';

export default async function AnimesByLatter(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { letter, currentPage, pageSize, maxPages } = req.query;

      const pagination = {
        currentPage: Number(currentPage) || 1,
        pageSize: Number(pageSize) || 12,
        maxPages: Number(maxPages) || 12,
      };

      const response = await animesByLatter(String(letter), pagination);

      res.setHeader('x-total-count', response.totalItems);

      return res.json(response);
    } catch (error) {
      return res.json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

import { NextApiRequest, NextApiResponse } from 'next';

import { getAnimesByCategory } from '@services/animeTv';

export default async function Category(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method === 'GET') {
      const { name, currentPage, pageSize, maxPages } = req.query;

      if (!name) {
        return res.json({ message: 'The query "name" has not been defined.' });
      }

      const pagination = {
        currentPage: Number(currentPage) || 1,
        pageSize: Number(pageSize) || 12,
        maxPages: Number(maxPages) || 12,
      };

      const response = await getAnimesByCategory(String(name), pagination);

      res.setHeader('x-total-count', response.totalItems);

      return res.send(response);
    }
  } catch (error) {
    if (error.message === 'Category not found.') {
      return res.json({ error: error.message });
    }
  }
}

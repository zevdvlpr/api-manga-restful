import { NextApiRequest, NextApiResponse } from 'next';

import { getAnimesByLetter } from '@services/animeTv';

export default async function Letters(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { letter, currentPage, pageSize, maxPages } = req.query;

      if (!letter) {
        return res.json({
          message: 'The query "letter" has not been defined.',
        });
      }

      const pagination = {
        currentPage: Number(currentPage) || 1,
        pageSize: Number(pageSize) || 12,
        maxPages: Number(maxPages) || 12,
      };

      const response = await getAnimesByLetter(String(letter), pagination);

      res.setHeader('x-total-count', response.totalItems);

      return res.send(response);
    } catch (error) {
      return res.json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

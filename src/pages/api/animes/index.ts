import { NextApiRequest, NextApiResponse } from 'next';

import { getAllAnimes } from '@services/animeTv';

export default async function Animes(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { currentPage, pageSize, maxPages } = req.query;

    const pagination = {
      currentPage: Number(currentPage) || 1,
      pageSize: Number(pageSize) || 12,
      maxPages: Number(maxPages) || 12,
    };

    const response = await getAllAnimes(pagination);

    res.setHeader('x-total-count', response.totalItems);

    return res.send(response);
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

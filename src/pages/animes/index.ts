import { NextApiRequest, NextApiResponse } from 'next';

import { getAll } from '../../../services/anime';

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

    const response = await getAll(pagination);
    
    res.setHeader('X-Total-Count', response.totalItems);

    return res.send(response);
  }
}

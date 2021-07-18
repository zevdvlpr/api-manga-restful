import { NextApiRequest, NextApiResponse } from 'next';

import { getLatestAnimes } from '@services/animeTv';

export default async function Recents(
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

    const response = await getLatestAnimes(pagination);

    res.setHeader('x-total-count', response.totalItems);

    return res.send(response);
  }
}

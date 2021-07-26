import { NextApiRequest, NextApiResponse } from 'next';

import { animeBroadcast } from '@services/animeTv';

export default async function AnimeBroadcast(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      const response = await animeBroadcast(String(id));

      return res.json(response);
    } catch (error) {
      return res.json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

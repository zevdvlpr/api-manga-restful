import { NextApiRequest, NextApiResponse } from 'next';

import { calendary } from '@services/animeTv';

export default async function Calendary(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const data = await calendary();

      return res.json(data);
    } catch (error) {
      return res.json({ message: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed.' });
  }
}

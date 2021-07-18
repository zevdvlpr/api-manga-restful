import axios from 'axios';

import { ANIME_TV_AUTH_URL } from '@config/urls';

import { selectUserAgent } from '@utils/userAgent';

import { readAuthFile } from './readAuthFile';

export async function authHeaders() {
  try {
    const authFile = await readAuthFile();

    const response = await axios.post(ANIME_TV_AUTH_URL, authFile, {
      headers: {
        'host': ANIME_TV_AUTH_URL.replace(/(^\w+:|^)\/\//, ''),
        'user-agent': selectUserAgent(),
        'content-type': 'application/octet-stream',
        'accept': '*/*',
        'content-length': authFile.length,
      },
    });

    const token = response.data;

    return {
      'X-Auth': token,
      'X-Requested-With': 'br.com.meuanimetv',
    };
  } catch (error) {
    console.error(error);
  }
}

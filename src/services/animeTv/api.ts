import axios from 'axios';

import { ANIME_TV_API_URL } from '@config/urls';

import { selectUserAgent } from '@utils/userAgent';

const api = axios.create({ baseURL: ANIME_TV_API_URL });

api.interceptors.request.use(async config => {
  config.headers['user-agent'] = selectUserAgent();

  return config;
});

export { api };

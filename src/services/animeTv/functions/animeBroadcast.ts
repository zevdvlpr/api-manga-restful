import { ANIME_TV_API_ROUTE } from '@config/urls';

import { authHeaders, streamingDataR } from '../utils';

import { IAnimeBroadcast } from '../interfaces/functions/animeBroadcast';

import { api } from '../api';

export async function animeBroadcast(
  videoId: string,
): Promise<IAnimeBroadcast> {
  const response = await api.get<IAnimeBroadcast[]>(ANIME_TV_API_ROUTE, {
    params: {
      episodios: videoId,
      ...streamingDataR(),
    },
    headers: {
      ...(await authHeaders()),
    },
  });

  if (response.data === null) {
    throw new Error('Anime not found.');
  }

  return response.data[0];
}

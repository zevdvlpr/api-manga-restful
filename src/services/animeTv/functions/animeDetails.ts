import paginate from 'jw-paginate';

import { ANIME_TV_CDN_URL, ANIME_TV_API_ROUTE } from '@config/urls';

import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IAnimeDetails } from '../interfaces/functions/animeDetails';
import { IAnimeEpisode } from '../interfaces/functions/animeEpisode';

import { api } from '../api';

interface IAnimeDetailsResponse {
  details: IAnimeDetails;
  episodes: TAnimesData<IAnimeEpisode[]>;
}

export async function animeDetails(
  animeId: string,
  pagination: IPaginationArgs,
): Promise<IAnimeDetailsResponse> {
  const responses = await Promise.all([
    api.get<IAnimeDetails[]>(ANIME_TV_API_ROUTE, { params: { info: animeId } }),
    api.get<IAnimeEpisode[]>(ANIME_TV_API_ROUTE, {
      params: { cat_id: animeId },
    }),
  ]);

  const [{ data: anime }, { data: episodes }] = responses;

  if (anime === null && episodes === null) {
    throw new Error('Anime not found.');
  }

  const pager = paginate(
    episodes.length,
    pagination.currentPage,
    pagination.pageSize,
    pagination.maxPages,
  );

  return {
    details: {
      id: anime[0].id,
      category_name: anime[0].category_name,
      category_image: anime[0].category_image
        ? `${ANIME_TV_CDN_URL}/img/${anime[0].category_image}`
        : null,
      category_description: anime[0].category_description,
      category_genres: anime[0].category_genres,
      ano: anime[0].ano,
    },
    episodes: {
      ...pager,
      data: episodes.slice(pager.startIndex, pager.endIndex + 1),
    },
  };
}

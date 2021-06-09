import fetch from 'node-fetch';
import { URLSearchParams } from 'url';
import paginate from 'jw-paginate';

import { ANIME_TV_API_URL, ANIME_TV_CDN_URL } from '../config/urls';

import { AllAnimeTemplate } from '../templates/AllAnimeTemplate';

import { PaginationArgs as IPaginationArgs } from '../interfaces/animes/paginationArgs';

import { AnimesData as IAnimesData } from '../interfaces/animes/animesData';

import { AllAnimes as IAllAnimes } from '../interfaces/animes/allAnimes';
import { PopularAnimes as IPopularAnimes } from '../interfaces/animes/popularAnimes';
import { RecentAnimes as IRecentAnimes } from '../interfaces/animes/recentAnimes';

async function request<T = any>(query = {}): Promise<T> {
  const params = new URLSearchParams(query);

  return fetch(`${ANIME_TV_API_URL}?${params.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<T>;
    })
    .then(data => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function list<T = any>(
  type: 'all' | 'popular' | 'recents',
  pagination = {
    currentPage: 1,
    pageSize: 12,
    maxPages: 12,
  },
  params = {},
): Promise<IAnimesData<T>> {
  const data = await request(params);

  if (data === null) {
    throw new Error('Data not found.');
  }

  const pager = paginate(
    data.length,
    pagination.currentPage,
    pagination.pageSize,
    pagination.maxPages,
  );

  return {
    ...pager,
    data: data.slice(pager.startIndex, pager.endIndex + 1).map(anime => new AllAnimeTemplate(type, anime)),
  };
}

export async function getAll({
  currentPage,
  pageSize,
  maxPages,
}: IPaginationArgs): Promise<IAnimesData<IAllAnimes[]>> {
  return await list<IAllAnimes[]>('all', {
    currentPage,
    pageSize,
    maxPages,
  });
}

export async function getPopular({
  currentPage,
  pageSize,
  maxPages,
}: IPaginationArgs): Promise<IAnimesData<IPopularAnimes[]>> {
  return await list<IPopularAnimes[]>(
    'popular',
    {
      currentPage,
      pageSize,
      maxPages,
    },
    { populares: '' },
  );
}

export async function getRecents({
  currentPage,
  pageSize,
  maxPages,
}: IPaginationArgs): Promise<IAnimesData<IRecentAnimes[]>> {
  return await list<IRecentAnimes[]>(
    'recents',
    {
      currentPage,
      pageSize,
      maxPages,
    },
    { latest: '' },
  );
}

import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { ISearchAnime } from '../interfaces/functions/searchAnime';

import { list } from './list';

export async function searchAnime(
  animeName: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<ISearchAnime[]>> {
  const params = {
    search: animeName,
  };

  return await list<ISearchAnime[]>('search', pagination, params);
}

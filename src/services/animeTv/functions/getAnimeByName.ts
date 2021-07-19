import { categories } from '../data/categories';

import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetAnimeByName } from '../interfaces/functions/getAnimeByName';

import { getList } from './getList';

export async function getAnimeByName(
  animeName: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetAnimeByName[]>> {
  const params = {
    search: animeName,
  };

  return await getList<IGetAnimeByName[]>('search', pagination, params);
}

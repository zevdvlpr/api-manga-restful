import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetPopularAnimes } from '../interfaces/functions/getPopularAnimes';

import { getList } from './getList';

export async function getPopularAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetPopularAnimes[]>> {
  const params = {
    populares: '',
  };

  return await getList<IGetPopularAnimes[]>('popular', pagination, params);
}

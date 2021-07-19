import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IPopularAnimes } from '../interfaces/functions/popularAnimes';

import { getList } from './getList';

export async function popularAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IPopularAnimes[]>> {
  const params = {
    populares: '',
  };

  return await getList<IPopularAnimes[]>('popular', pagination, params);
}

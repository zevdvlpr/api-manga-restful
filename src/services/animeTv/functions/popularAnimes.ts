import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IPopularAnimes } from '../interfaces/functions/popularAnimes';

import { list } from './list';

export async function popularAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IPopularAnimes[]>> {
  const params = {
    populares: '',
  };

  return await list<IPopularAnimes[]>('popular', pagination, params);
}

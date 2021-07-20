import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { ILastAnimes } from '../interfaces/functions/lastAnimes';

import { list } from './list';

export async function lastAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<ILastAnimes[]>> {
  const params = {
    latest: '',
  };

  return await list<ILastAnimes[]>('latest', pagination, params);
}

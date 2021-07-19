import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { ILastAnimes } from '../interfaces/functions/lastAnimes';

import { getList } from './getList';

export async function lastAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<ILastAnimes[]>> {
  const params = {
    latest: '',
  };

  return await getList<ILastAnimes[]>('latest', pagination, params);
}

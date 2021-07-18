import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetLatestAnimes } from '../interfaces/functions/getLatestAnimes';

import { getList } from './getList';

export async function getLatestAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetLatestAnimes[]>> {
  return await getList<IGetLatestAnimes[]>('latest', pagination);
}

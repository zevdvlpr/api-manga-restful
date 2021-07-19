import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IAllAnimes } from '../interfaces/functions/allAnimes';

import { getList } from './getList';

export async function allAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IAllAnimes[]>> {
  return await getList<IAllAnimes[]>('all', pagination);
}

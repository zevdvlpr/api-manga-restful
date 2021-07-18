import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetAllAnimes } from '../interfaces/functions/getAllAnimes';

import { getList } from './getList';

export async function getAllAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetAllAnimes[]>> {
  return await getList<IGetAllAnimes[]>('all', pagination);
}

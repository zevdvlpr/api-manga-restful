import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IAllAnimes } from '../interfaces/functions/allAnimes';

import { list } from './list';

export async function allAnimes(
  pagination: IPaginationArgs,
): Promise<TAnimesData<IAllAnimes[]>> {
  return await list<IAllAnimes[]>('all', pagination);
}

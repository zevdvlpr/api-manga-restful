import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetAnimesByLetter } from '../interfaces/functions/getAnimesByLetter';

import { getList } from './getList';

export async function getAnimesByLetter(
  letter: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetAnimesByLetter[]>> {
  const params = {
    letra: letter,
  };

  // if (!/[A-Za-z]/g.test(letter)) {
  //   throw new Error('Invalid character.');
  // }

  return await getList<IGetAnimesByLetter[]>('letters', pagination, params);
}

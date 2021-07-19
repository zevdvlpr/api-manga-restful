import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IAnimesByLetter } from '../interfaces/functions/animesByLatter';

import { getList } from './getList';

export async function animesByLatter(
  letter: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<IAnimesByLetter[]>> {
  const params = {
    letra: letter,
  };

  // if (!/[A-Za-z]/g.test(letter)) {
  //   throw new Error('Invalid character.');
  // }

  return await getList<IAnimesByLetter[]>('letters', pagination, params);
}

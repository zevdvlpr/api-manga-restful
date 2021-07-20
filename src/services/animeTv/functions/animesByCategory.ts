import { categories } from '../data/categories';

import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IAnimesByCategory } from '../interfaces/functions/animesByCategory';

import { list } from './list';

export async function animesByCategory(
  categoryName: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<IAnimesByCategory[]>> {
  const params = {
    categoria: categoryName,
  };

  if (!categories.includes(categoryName)) {
    throw new Error('Category not found.');
  }

  return await list<IAnimesByCategory[]>('categories', pagination, params);
}

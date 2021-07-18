import { categories } from '../data/categories';

import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { IGetAnimesByCategory } from '../interfaces/functions/getAnimesByCategory';

import { getList } from './getList';

export async function getAnimesByCategory(
  categoryName: string,
  pagination: IPaginationArgs,
): Promise<TAnimesData<IGetAnimesByCategory[]>> {
  const params = {
    categoria: categoryName,
  };

  if (!categories.includes(categoryName)) {
    throw new Error('Category not found.');
  }

  return await getList<IGetAnimesByCategory[]>(
    'categories',
    pagination,
    params,
  );
}

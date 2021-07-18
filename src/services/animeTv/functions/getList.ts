import { AxiosRequestConfig } from 'axios';
import paginate from 'jw-paginate';

import { ListModel } from '../models/ListModel';

import { TListType } from '../interfaces/listType';
import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { api } from '../api';

const allowedQueries = { all: '', latest: '', popular: '' };
const updateQueries = { popular: 'populares' };

function changeKeyName(type: string) {
  const [_oldName, newName] = Object.entries(updateQueries).find(
    ([name]) => name === type,
  );

  return { [newName]: '' };
}

function getParams(type: TListType, params: AxiosRequestConfig['params']) {
  const query = Object.entries(allowedQueries).find(([name]) => name === type);

  if (!query) return { ...params };

  if (Object.entries(updateQueries).find(([name]) => name === type)) {
    return changeKeyName(type);
  }

  return { [query[0]]: query[1] };
}

export async function getList<T = any>(
  type: TListType,
  pagination: IPaginationArgs = { currentPage: 1, pageSize: 12, maxPages: 12 },
  params: AxiosRequestConfig['params'] = {},
): Promise<TAnimesData<T>> {
  const response = await api.get('/meuanimetv-40.php', {
    params: getParams(type, params),
  });

  if (response.data === null) {
    throw new Error('Data not found.');
  }

  const pager = paginate(
    response.data.length,
    pagination.currentPage,
    pagination.pageSize,
    pagination.maxPages,
  );

  const data = {
    ...pager,
    data: response.data
      .slice(pager.startIndex, pager.endIndex + 1)
      .map(anime => new ListModel(type, anime)),
  };

  return data;
}

import { AxiosRequestConfig } from 'axios';
import paginate from 'jw-paginate';

import { ANIME_TV_API_ROUTE } from '@config/urls';

import { streamingDataR } from '../utils';

import { ListModel } from '../models/ListModel';

import { TListType } from '../interfaces/listType';
import { IPaginationArgs } from '../interfaces/paginationArgs';

import { TAnimesData } from '../interfaces/animesData';

import { api } from '../api';

export async function list<T = any>(
  type: TListType,
  pagination: IPaginationArgs = { currentPage: 1, pageSize: 12, maxPages: 12 },
  params: AxiosRequestConfig['params'] = {},
): Promise<TAnimesData<T>> {
  const dataR = streamingDataR();

  const response = await api.get(ANIME_TV_API_ROUTE, {
    params: {
      ...params,
      ...dataR,
    },
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

  return {
    ...pager,
    data: response.data
      .slice(pager.startIndex, pager.endIndex + 1)
      .map(anime => new ListModel(type, anime)),
  };
}

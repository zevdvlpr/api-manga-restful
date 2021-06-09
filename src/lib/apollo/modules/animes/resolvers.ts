import { getAll, getRecents, getPopular } from '../../../../services/anime';

type ListArgs = {
  currentPage: number;
  pageSize: number;
  maxPages: number;
};

export const resolvers = {
  Query: {
    async allAnimes(
      _parent: any,
      { currentPage, pageSize, maxPages }: ListArgs,
      _context: any,
      _info: any,
    ) {
      const response = await getAll({ currentPage, pageSize, maxPages });

      return response;
    },
    async recentAnimes(
      _parent: any,
      { currentPage, pageSize, maxPages }: ListArgs,
      _context: any,
      _info: any,
    ) {
      const response = await getRecents({ currentPage, pageSize, maxPages });

      return response;
    },
    async popularAnimes(
      _parent: any,
      { currentPage, pageSize, maxPages }: ListArgs,
      _context: any,
      _info: any,
    ) {
      const response = await getPopular({ currentPage, pageSize, maxPages });

      return response;
    },
  },
};

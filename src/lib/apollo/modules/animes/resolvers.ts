import { getAll, getRecents, getPopular } from '../../../../services/anime';

type ListArgs = {
  currentPage: number;
  pageSize: number;
  maxPages: number;
};

export const resolvers = {
  Query: {
    async allAnimes(_, { currentPage, pageSize, maxPages }: ListArgs) {
      const response = await getAll({ currentPage, pageSize, maxPages });

      return response;
    },
    async recentAnimes(_, { currentPage, pageSize, maxPages }: ListArgs) {
      const response = await getRecents({ currentPage, pageSize, maxPages });

      return response;
    },
    async popularAnimes(_, { currentPage, pageSize, maxPages }: ListArgs) {
      const response = await getPopular({ currentPage, pageSize, maxPages });

      return response;
    },
  },
};

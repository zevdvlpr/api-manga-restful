import { makeExecutableSchema } from 'graphql-tools';

import { AnimesResolver, AnimesTypes } from './modules/animes';

export const schema = makeExecutableSchema({
  resolvers: [AnimesResolver],
  typeDefs: [AnimesTypes],
});
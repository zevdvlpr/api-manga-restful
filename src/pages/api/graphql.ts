import { ApolloServer } from 'apollo-server-micro';

import { schema } from '@lib/apollo/shema';

const apolloServer = new ApolloServer({
  playground: true,
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });

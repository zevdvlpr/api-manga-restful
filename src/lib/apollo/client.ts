import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { IncomingMessage, ServerResponse } from 'http';

type _ApolloClient = ApolloClient<NormalizedCacheObject> | undefined;

let apolloClient: _ApolloClient;

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

function createIsomorphLink(context: ResolverContext = {}) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');

    const { schema } = require('./schema');

    return new SchemaLink({
      schema,
      context,
    });
  } else {
    const { HttpLink } = require('@apollo/client');

    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });
  }
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: any = null,
  context?: ResolverContext,
): _ApolloClient {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject): _ApolloClient {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
}

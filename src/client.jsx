import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://goldenrod-clam-913898.hostingersite.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
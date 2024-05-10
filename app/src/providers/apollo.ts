import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://bookshelf-app-tau.vercel.app/',
  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  name: 'web-books',
  version: '0.1'
})

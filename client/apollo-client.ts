import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	link: new HttpLink({ uri: process.env.GRAPHQL_API_URL, fetch }),
	cache: new InMemoryCache(),
});

export default client;

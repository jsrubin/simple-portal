import { withProps } from 'recompact';
import ApolloClient from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import {InMemoryCache, defaultDataIdFromObject} from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
    dataIdFromObject: object => {
        defaultDataIdFromObject(object)
    }
})

export const client = new ApolloClient({
    uri: process.env.GRAPHQL_URI || '/api/graphql',
    cache,
    link: withClientState(cache)
})

export default withProps({client})(ApolloProvider)
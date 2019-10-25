import React from 'react';
import { nest } from 'recompact';
import ApolloClient, { client } from './apollo';
import { ApolloProvider } from '@apollo/react-hooks';

const Providers = nest(
    ({children}) => 
        <ApolloClient children={children}/>,
    ({children}) => 
        <ApolloProvider client={client}>{children}</ApolloProvider>
);

Providers.displayName = 'AppProvider(Composed)';

const AppProvider = ({children}) => <Providers children={children}/>

export {AppProvider as Provider };
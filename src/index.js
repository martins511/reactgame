import React from 'react';
import ReactDOM from 'react-dom/client';
import Geoquery from './Geography/Geoquery';
import App from './App';
import Media from './MediaQuery/Media';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri:"https://api.geographql.rudio.dev/graphql",
    cache:new InMemoryCache(),

})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);




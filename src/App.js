import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'

import Routes from './routes/Routes'

function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes/>
      </Router>
    </ApolloProvider>
  );
}

export default App;

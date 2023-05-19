import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory,Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';


const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

//this works with the backend server.
const apolloClient = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router history={hashHistory} >
         <Route path="/" component={App} >
          <Route path="login" component={LoginForm} />
          <Route path="signup" component={SignUpForm} />
          <Route path="dashboard" component={requireAuth(Dashboard)} />
         </Route>    
      </Router>
    </ApolloProvider>
  
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));

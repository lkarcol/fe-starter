import App from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo';
import PageContainer from './../components/common/layout/PageContainer';

class StarterApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(StarterApp);

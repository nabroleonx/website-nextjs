import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import Page from '../components/Page';

// https://nextjs.org/docs/#custom-app

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Page>
    );
  }
}

export default withGA('UA-119932656-2', Router)(CustomApp);

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import { COLORS, TYPOGRAPHY } from '../lib/styles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    const styles = flush();
    return {
      html, head, errorHtml, chunks, styles,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <script src="https://use.fontawesome.com/ef9a7eb4b8.js" />

          <link rel="stylesheet" href="/static/css/base.css" />
        </Head>
        <body id="body">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
        <style jsx>
          {`
            body {
              margin: 0;
              background-color: ${COLORS.shaders.dark};
              font-size: 18px;
              font-family: ${TYPOGRAPHY.content};
            }
         `}
        </style>
      </html>
    );
  }
}

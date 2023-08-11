import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='sv'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
            rel='stylesheet'
          />
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

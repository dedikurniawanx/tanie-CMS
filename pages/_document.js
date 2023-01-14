import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* ===============================================*/}
          {/*    Document Title*/}
          {/* ===============================================*/}
          <title>Tanie</title>
          {/* ===============================================*/}
          {/*    Favicons*/}
          {/* ===============================================*/}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/img/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/img/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicons/favicon-16x16.png"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/assets/img/favicons/favicon.ico"
          />
          <link rel="manifest" href="/assets/img/favicons/manifest.json" />
          <meta
            name="msapplication-TileImage"
            content="assets/img/favicons/mstile-150x150.png"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* ===============================================*/}
          {/*    Stylesheets*/}
          {/* ===============================================*/}
          <link href="/assets/css/theme.min.css" rel="stylesheet" />
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/vendors/@popperjs/popper.min.js"></script>
        <script src="/vendors/bootstrap/bootstrap.min.js"></script>
        <script src="/vendors/is/is.min.js"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll"></script>
        {/* <script src="assets/js/theme.js"></script> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&amp;display=swap"
          rel="stylesheet"
        />
      </body>
    </Html>
  );
}

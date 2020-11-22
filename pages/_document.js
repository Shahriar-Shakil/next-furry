import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="author" content="" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <title>Next Furry</title>
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="plugins/font-awesome/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="fonts/Linearicons/Linearicons/Font/demo-files/demo.css"
          />
          <link
            rel="stylesheet"
            href="plugins/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="plugins/owl-carousel/assets/owl.carousel.min.css"
          />
          <link
            rel="stylesheet"
            href="plugins/owl-carousel/assets/owl.theme.default.min.css"
          />
          <link rel="stylesheet" href="plugins/slick/slick/slick.css" />
          <link rel="stylesheet" href="plugins/nouislider/nouislider.min.css" />
          <link
            rel="stylesheet"
            href="plugins/lightGallery-master/dist/css/lightgallery.min.css"
          />
          <link
            rel="stylesheet"
            href="plugins/jquery-bar-rating/dist/themes/fontawesome-stars.css"
          />
          <link
            rel="stylesheet"
            href="plugins/select2/dist/css/select2.min.css"
          />
          <link rel="stylesheet" href="css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            data-cfasync="false"
            src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>
          <script src="plugins/jquery.min.js"></script>
          <script src="plugins/nouislider/nouislider.min.js"></script>
          <script src="plugins/popper.min.js"></script>
          <script src="plugins/owl-carousel/owl.carousel.min.js"></script>
          <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
          <script src="plugins/imagesloaded.pkgd.min.js"></script>
          <script src="plugins/masonry.pkgd.min.js"></script>
          <script src="plugins/isotope.pkgd.min.js"></script>
          <script src="plugins/jquery.matchHeight-min.js"></script>
          <script src="plugins/slick/slick/slick.min.js"></script>
          <script src="plugins/jquery-bar-rating/dist/jquery.barrating.min.js"></script>
          <script src="plugins/slick-animation.min.js"></script>
          <script src="plugins/lightGallery-master/dist/js/lightgallery-all.min.js"></script>
          <script src="plugins/sticky-sidebar/dist/sticky-sidebar.min.js"></script>
          <script src="plugins/select2/dist/js/select2.full.min.js"></script>
          <script src="plugins/gmap3.min.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

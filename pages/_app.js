import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
// import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'



Router.events.on('routeChangeStart',() => NProgress.start());
Router.events.on('routeChangeComplete',() => NProgress.done());
Router.events.on('routeChangeError',() => NProgress.done());




function MyApp({ Component, pageProps }) {
  return<div>
    <Head>
    <title>LearnerBoy your tech guide</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    {/* <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet"/> */}
  
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>


    <Script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></Script>
    <Component {...pageProps} />
  </div> 
}

export default MyApp

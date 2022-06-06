import '../styles/globals.css'
import { useEffect } from "react";
//import Layout with navbar
import Layout from '../components/Layout'
//import bootsrap css
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {

  //importing bootsrap js. done after page loads on client, once window and client are defined.
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);


  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>


  )
}

export default MyApp

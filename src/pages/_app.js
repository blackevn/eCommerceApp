import '@/styles/globals.css'
import { Layout } from 'components'
import { AppContext } from "context/AppContext";

export default function App({ Component, pageProps }) {

  return <>

   

      <AppContext>


        <Layout>

          <Component {...pageProps} />

        </Layout>

      </AppContext>



  </>


}

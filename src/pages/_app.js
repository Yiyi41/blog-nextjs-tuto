import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default function App({ Component, pageProps }) {
  return( <Layout>
    <Component {...pageProps} />
    </Layout>)
  
}

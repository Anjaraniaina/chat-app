import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Layout} from "@/components";
import {UserProvider} from "@/contexts/UserContext";

export default function App({ Component, pageProps }: AppProps) {

  return(
      <Layout>
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
      </Layout>
  )
}

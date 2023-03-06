import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";
import { Cart } from "./Cart";
import { useAppContext } from "context/AppContext";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children }) => {

  const { toggle, handleToggle } = useAppContext()

  return <>

  <div  className="z-[99992]">

    <Toaster className="z-[99992]"/>

  </div>

    <div >

      { toggle && <div><Cart /></div> }

      <Head>

        <title>iFeel</title>

      </Head>

      <header className="w-full box-border">

        <Nav toggle={ handleToggle } />

      </header>

      <main className="overflow-x-hidden min-h-screen bg-base-100 dark:bg-gray-800 dark:text-gray-200 text-gray-600">

        { children }

      </main>

      <footer>

        <Footer />

      </footer>

    </div>



  </>
};

export default Layout;

import { faMoon, faShoppingCart, faSun } from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";
import Button from "./Button";
import { useDarkMode } from "hooks";
import Link from "next/link";
import { urlFor } from "lib/sanityClient";

import { useAppContext } from "context/AppContext";



const Nav = ({ toggle }) => {


  const [enabled, setEnabled] = useDarkMode()

  const { totalQuantities } = useAppContext()


  const toggleHandler = () => {

    setEnabled(prevState => !prevState)

  }

  return <>

    <div className="flex justify-between p-4 w-screen box-border items-center bg-base-100 dark:bg-gray-800">

      <Link href="/"><div className="text-3xl font-black text-black dark:text-white"><p className="m-0 p-0">iFeel</p></div></Link>

      <Link href="/categories/1">Categories</Link>

      <div className="flex gap-8 items-center">

        <Toggle
          on={faSun}
          off={faMoon}
          checked={enabled}
          toggleEvent={toggleHandler}
          modifier1="text-black dark:text-white"
          modifier2="text-black dark:text-white"
        />



        <Button clickEvent={toggle} modifier="btn" text="" icon={faShoppingCart}>



          <div className="badge">{ totalQuantities }</div>



        </Button>

      </div>

    </div>

  </>
}

export const getStaticProps = async () => {

  const logoQuery = `*[_type == "logo"]`

  const logo = await client.fetch(logoQuery)

  return {

    props: { logo }

  }

}

export default Nav;

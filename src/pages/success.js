import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "context/AppContext";

const Success = () => {

    const { clearCart } = useAppContext()

  return <>
   
          <div className="grid place-items-center p-20">

           <FontAwesomeIcon icon={faCheckCircle} className="text-[7em] lg:text-[13em] text-green-500"/>
          
          </div>

          </>
}

export default Success



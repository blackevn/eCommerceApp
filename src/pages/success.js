import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "context/AppContext";

const Success = () => {

    const { clearCart } = useAppContext()

  return <>
   
          <div className="grid place-items-center p-20 h-[70vh]">

            <div className="grid place-items-center space-y-8">

            <FontAwesomeIcon icon={faCheckCircle} className="text-[7em] lg:text-[13em] text-green-500"/>

            <div className="text-3xl font-bold text-center">Purchase was successful</div>

            <div className="font-bold text-2xl">Thank you</div>

            </div>
          
          </div>

          </>
}

export default Success





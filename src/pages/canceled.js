import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Cancel = () => {

   
  return <>
   
          <div className="grid place-items-center p-20 h-[70vh]">

            <div className="grid place-items-center space-y-8">

            <FontAwesomeIcon icon={faXmarkCircle} className="text-[7em] lg:text-[13em] text-red-500"/>

            <div className="text-3xl font-bold">Purchase was not successful</div>

            <div className="font-bold text-2xl">Something went wrong</div>

            </div>
          
          </div>

          </>
}

export default Cancel





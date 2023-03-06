import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArrowButton = ({icon}) => {
  return <>

                <button className="btn btn-circle shadow-2xl">

                    <FontAwesomeIcon icon={icon}/>

                </button>
  
        </>
};

ArrowButton.defaultProps = {

    icon: faIcons

}

export default ArrowButton;

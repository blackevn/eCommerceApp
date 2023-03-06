
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"


const Button = (props) => {

    const {

           text, 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon, 
           borderSize, 
           paddingX,
           paddingY,
           children,
           gradient,
           shadow,
           margin,
           modifier,
           tip,
           isActive,
           disabled
           
          
          } = props

  return (
    <>
    
    <button disabled={disabled} onClick={clickEvent}
    
    className={`

        flex
        items-center
        justify-center
        gap-1
        rounded-lg  
        btn-sm md:btn-md
        
        ${isActive}
        ${modifier}
        ${borderSize} 
        ${borderColor} 
        ${paddingX}
        ${paddingY}
        ${margin}
        ${textColor}
        ${bgColor}
        ${gradient}
        ${shadow}
 
    `}

     data-tip={tip}
    
   ><FontAwesomeIcon icon={icon}/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}

Button.defaultProps = {
  borderSize: "border-0",
 
  text: "Button",
  paddingX: "px-6",
  paddingY: "py-1",
  icon: faIcons,
}


export default Button;

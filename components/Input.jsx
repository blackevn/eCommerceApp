
const Input = (props) => {

    const {type, name, value, id, onChange, placeholder, bgColor, outline, textColor, textTrans, span, modifier, ref, disabled} = props

  return (

    <>

    <input 

    disabled={disabled}

      ref={ref}
className={`

       rounded-lg
       p-1.5
       px-2
       ${bgColor}
       ${outline} 
       ${textColor}
       ${textTrans}
       ${span}
       ${modifier}
       bg-gray-200
       dark:bg-base-300

       `}

    type={type}
    name={name}
    value={value}
    id={id}
    onChange={onChange}
    placeholder={placeholder}
    
    />

    </>

  )
}

Input.defaultProps = {

  placeholder: "Input",
  textColor: "text-gray-600"
}

export default Input;

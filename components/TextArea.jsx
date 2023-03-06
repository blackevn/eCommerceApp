import React from "react";

const TextArea = (props) => {
 
    const {
        
            value,
            name,
            id,
            cols,
            rows,
            onChange,
            placeholder,
            modifier
            
        } = props

    return (
  
    <>
    <textarea className={`
   
    text-gray-400
    ${modifier}
    bg-gray-200
    dark:bg-base-300

    `}

        name={name}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        cols={cols} 
        rows={rows} >

    </textarea>
    </>
  
    )
};

TextArea.defaultProps = {
    cols: 4,
    rows: 4
}

export default TextArea;

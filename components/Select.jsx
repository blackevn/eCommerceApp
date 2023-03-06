import React from "react";

const Select = ({ children, name, value, onChange }) => {
  return <>

            <div>
            <select value={value} onChange={onChange} className="select w-full max-w-xs bg-gray-200 text-gray-600 dark:bg-base-300 dark:text-gray-200 ">
                    <option disabled selected>{name}</option>
                    {children}
                  </select>
            </div>
  
        </>
};

export default Select;

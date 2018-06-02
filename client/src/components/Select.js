import React from 'react';

const Select = (props) => {  
  let {label, onChange, optionItems} = props;
    return (
      <div>
        <label>{label}</label>
        <select className="browser-default" onChange={onChange}>
                  <option value="" disabled selected>Please select</option>
                  {optionItems}
        </select> 
      </div>
    );
  };
  
  export default Select;
  
import React from 'react';



const Input= ({name, label, ...rest}) => {
  return (
        <div class="col-md-6 mb-3">
            <label htmlfor={name}>{label}</label>
            <input type="text" class="form-control" id={name} {...rest}/>
        </div>
  );
}

export default Input;
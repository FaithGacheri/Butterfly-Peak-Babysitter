import React from 'react'
// import { Link } from 'react-router-dom';

const DropDownBar = ({Change}) =>{
    
  return (
    <div>
      <select name="language" id="language">
        <option value="Location" diable onClick={Change}>Location</option>

        <option value="Nairobi">Nairobi</option>
        <option value="Kajiado">Kajiado</option>
        <option value="Machakos" selected>Machakos</option>
        <option value="Kiambu" selected>Kiambur</option>
      </select>
    </div>
  );
}

export default DropDownBar
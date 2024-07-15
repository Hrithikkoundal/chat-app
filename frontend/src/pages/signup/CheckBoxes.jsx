import React from 'react'

const CheckBoxes = ({onCheckboxChange, onSelectGender}) => {
  return (
    <div className='flex p-2'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer text-gray-200 ${onSelectGender === "male" ? "selected" :""}`}>
            <span className='label-text text-gray-200'>Male</span>
            <input 
              type='checkbox' 
              className='checkbox border-gray-200 checkbox-xs'
              checked={onSelectGender === "male"}
              onChange={()=> onCheckboxChange("male")}
              />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer text-gray-200 ${onSelectGender === "female" ? "selected" :""}`}>
            <span className='label-text text-gray-200'>Female</span>
            <input 
              type='checkbox' 
              className='checkbox border-gray-200 checkbox-xs'
              checked={onSelectGender === "female"}
              onChange={()=> onCheckboxChange("female")}
              />
        </label>
      </div>
    </div>
  )
}

export default CheckBoxes

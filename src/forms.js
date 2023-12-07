import React, { useState } from "react";

const MyForm=()=>{
const [isChecked,setIsChecked]=useState(false)
const[selectedOption,setSelectedOption]=useState('')


const handleCheckBoxChanges=()=>{
    setIsChecked(!isChecked)
}

const handleSelectedChange=(event)=>{
    setSelectedOption(event.target.value)
}


return(
   <form>
     <label>
       <input
       type="checkbox"
       checked={isChecked}
       onChange={handleCheckBoxChanges}
       />{''}
       Check mem
       </label>
       <br/>
       <label>
select:
<select value={selectedOption} onChange={handleSelectedChange}>
 <option value="1">select an option</option>
 <option value="2">select an option1</option>
 <option value="3">select an option2</option>

</select>
 </label>
   </form>
)
}
export default MyForm








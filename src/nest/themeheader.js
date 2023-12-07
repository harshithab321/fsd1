import React from "react";

import { useTheme } from "./theme"

const ThemeHeader=()=>{

   const {theme}=useTheme()

return(
  <h1
   style={{
    color:theme==="light"? "black":"white",
    background:theme
   }}
>
theme header
</h1>
)
}

export default ThemeHeader
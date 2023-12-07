import React from "react";

import { useTheme } from "./theme";

const ThemeButton=()=>{

   const {theme,toggleTheme}=useTheme()

return(
  <button
   style={{
    color:theme==="light"?"black":"white",
    background:theme
   }}
   onClick={toggleTheme}
>
toggleTheme
</button>
)
}

export default ThemeButton
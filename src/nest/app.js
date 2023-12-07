import React from "react";
import ThemeHeader from "./themeheader"
import ThemeButton from "./themebutton"
import { ThemeProvider } from "./theme";


const App=()=>{


return(
    <ThemeProvider>
        <div>
            <ThemeHeader/>
            <ThemeButton/>
        </div>
    </ThemeProvider>
)
}

export default App
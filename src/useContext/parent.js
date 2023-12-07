import React, { createContext, useContext } from "react";

const theme=createContext()


export function Fun({children}){
    
    return(
    <theme.Provider value={{data:'john'}}>
       {children}
    </theme.Provider>
)
}

export const useTheme=()=>{
    return useContext(theme)
}


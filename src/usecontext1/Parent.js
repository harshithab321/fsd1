import React, { createContext, useContext } from "react";

const theme=createContext()


export function Fun({children}){
    
    return(
    <theme.Provider value={{ name:'john' ,
                              age:18}}>
       {children}
    </theme.Provider>
)
}

export const useTheme=()=>{
    return useContext(theme)
}

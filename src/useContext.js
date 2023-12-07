import react, { createContext,useContext } from 'react'


const ThemeProvider=createContext()



export const Fun=({children})=>{

 
  const name="hello welcome"

return(
    
    <ThemeProvider.Provider value={name}>
        {children}
    </ThemeProvider.Provider>
)
}

export const useTheme=()=>{
    return useContext(ThemeProvider)
}
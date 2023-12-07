import { useContext } from "react";
import { Context } from "./parent";

function Child(){
      const name=Context()
    
    
      return(
        <>
        
            
            {name}
        
        
        </>
        
    )
}
export default Child
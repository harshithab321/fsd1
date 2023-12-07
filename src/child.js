import react, { useContext } from 'react'
import {useTheme} from  './useContext'


const Funct=()=>{

    const {name}=useTheme()
return(
    <div>
        {name}
    </div>
 )
}

export default Funct


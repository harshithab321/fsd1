import react, { useContext } from 'react'
import {useTheme} from  './Parenet'


const Funct=()=>{

    const {name}=useTheme()
return(
    <div>
        {name}
    </div>
 )
}

export default Funct


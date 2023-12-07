
import { useTheme} from './Parent'




const  Child1=()=>{
    const {name,age}=useTheme()
    console.log(name)
    return(
        <>
         <p>{name}</p>
         <p>{age}</p>
        </>
       
    )
}

export default Child1
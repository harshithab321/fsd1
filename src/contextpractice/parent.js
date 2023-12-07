import react, { createContext, useContext } from 'react'
import Child from './child'



const MyProvider=createContext()

function App(){

return(
    <MyProvider.Provider value={'john'}>
        <Child/>
    </MyProvider.Provider>
)

}

export const Context=()=>{
    return useContext(MyProvider)
}

export default MyProvider
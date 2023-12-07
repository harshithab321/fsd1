import React from 'react'
import { useTheme } from './parent'




function Child(){
const {data}=useTheme()


    return (
            <>
               <p> {data}</p>
            </>
          )
}

export default Child
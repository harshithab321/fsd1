import React from 'react'
import DataFetch from './fetch'
import Display from './displaydata'



function App(){
    return(
        <div>
            <h1>datafetch</h1>
            <DataFetch render={(data)=><Display data={data}/>}/>
        </div>
    )
}

export default App
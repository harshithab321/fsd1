import {useState, useEffect,useCallback} from 'react'

function App(){

    const [word,setWord]=useState("doe")

    const say = useCallback(()=>console.log(`Your word is: ${word}`),[word])

    useEffect(()=>{
      console.log("hello")
        say() 

    },[say]) 

    return <div>Welcome!</div> 
}

export default App
import react ,{useMemo, useState}from 'react'


function Memo(){

const[state ,changeState]=useState(0)
const[state1,chnageState]=useState(0)

const incrementhangler=()=>{
    console.log("helo")
    changeState(state+1)
}


const decrementhangler=()=>{
    console.log("bye")
    chnageState(state1+1)
}



const Even=useMemo(()=>{

    let i=0;
    console.log("state")
     while(i<200000000)
        i++;
       return  state%2==0
     
     

},[state])

return(
       <>
       <button onClick={incrementhangler}>+</button>
       <span>{Even? "even":"odd"}</span>
       {state}
       <button onClick={decrementhangler}>-</button>

       </>

    )
}

export default Memo
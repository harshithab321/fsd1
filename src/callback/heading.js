import React from "react";


function Heading(){
    console.log("rendering heading")
    return <h2>callBack hook</h2> 
}


export default React.memo(Heading)
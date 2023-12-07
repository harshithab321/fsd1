import React from "react";

function fetchData(){
    
   
    return {
        id:1
    }
}

function DataFetch(props){
 const data=fetchData();
 return props.render(data)

}

export default DataFetch
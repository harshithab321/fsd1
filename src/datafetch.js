import React ,{useEffect,useState} from "react"



const RandomUserApp=()=>{
    
    const[users,setUsers]=useState([])

    useEffect(()=>{
   
        const fetchRandomUsers=async()=>{
           
            try{
                 const response = await fetch(" https://jsonplaceholder.typicode.com/users")
                 const data=await response.json()
                 setUsers(data)
                 console.log(data)
            }
            catch(error){
                console.error("error fetching the user data",error)
                setUsers([])
            }
        }
        fetchRandomUsers()
            },[])


    return(
         <div>
            <h1>Random user Application</h1>
            {
                users.map((user,index)=>( <li key={index}>
                    {user.id}
                </li>))
            }
           
         </div>

    )
 }

 export default  RandomUserApp





    
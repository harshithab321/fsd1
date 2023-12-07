import React from "react";
import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"



const Home=()=><h2>Home</h2>
const About=()=><h2>About</h2>
const Contact=()=><h2>Contact</h2>


const App=()=>{

return(
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">about</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </div>
    </Router>
)
}

export default App
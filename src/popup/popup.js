// import React,{useState} from 'react'
// import {Modal,ModalHeader} from 'reactstrap'

// function Profile(){
//     const[modal,setmodal]=useState(false)
//     return(
//         <div>
//          <Modal 
//          size='lg'
//          isOpen={modal}
//          toggle={()=>setmodal(!modal)}>
//               <ModalHeader>
//                   popup
//               </ModalHeader>
//          </Modal>
//          <button onClick={()=>setmodal(true)} className='btn mt-5 ml-5' style={{backgroundColor:"blue",color:"white",marginLeft:"600px"}}>popup</button>
//         </div>
//     )
// }

import React from 'react';
import {  Container } from 'react-bootstrap';
import { Badge, NavDropdown, Nav, Navbar} from "react-bootstrap";
import './cssfile.css';
import { FaBars } from 'react-icons/fa';
import { RiChat1Line, RiNotification2Line } from 'react-icons/ri';
import details from './da';

function Profile() {
  return (
    <Container >
       
    
       <Navbar  fluid bg="carrot" expand="lg" className="bg-body-carrot" style={{ height: '60px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', margin: '0' ,width:"100%"}}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav  >


         <Container className="d-flex mt-5 justify-content-between"   >
        <div >
          <Nav.Item style={{ marginRight: '10px' }}> <img
              src={details[0].image}
              width="30"
              height="30"
              className="d-inline-block align-top text-center img-responsive"
              alt="logo"
            /></Nav.Item>
            <div>
            <FaBars className="menu-icon" />
            </div>
            <div>
                <h6>Dream Technologies</h6>
            </div>
            </div>
     

     <div>
     <div>
     <Nav.Item  style={{ marginRight: '10px' }}>
     <img
                  className="image"
                  style={{ marginRight: '-5px', marginTop: "23px" }}
                  src={details[0].usa}
                  width="0"
                  height="0"
                  alt="logo"
                /></Nav.Item>
     </div>
    <div>

    <NavDropdown title="English" className="custom-dropdown" id="basic-nav-dropdown" style={{ marginRight: '15px', marginTop: '20px', color: 'red' }}>
                <NavDropdown.Item href="#">application</NavDropdown.Item>
                <NavDropdown.Item href="#">home</NavDropdown.Item>
                <NavDropdown.Item href="#">blog</NavDropdown.Item>
                <NavDropdown.Item href="#">contact</NavDropdown.Item>
              </NavDropdown>
    </div>
<div>
<RiNotification2Line className="notification ms-sm-2, mt-lg-0" style={{ marginTop: '10px' }} size={20} />
              <h6>
                <Badge bg="primary" style={{ marginTop: "20px", marginRight: "20px" }} >3</Badge>
              </h6>
</div>
<div>
    
<RiChat1Line className="comment ms-sm-2, mt-lg-0" style={{ marginRight: "-3px", marginTop: "10px", fontSize: "20px" }} size={20} />
              <h6>
                <Badge bg="primary" style={{ marginTop: "20px", marginRight: "10px" }} >3</Badge>
              </h6>
</div>
<div>
<img
                  style={{ marginTop: "0px", borderRadius: "15px" }}
                  src={details[0].profile}
                  width="30"
                  height="30"
                  className="d-inline-block align-top mr-sm-2"
                  alt="logo"
                />
</div>
<div>
<NavDropdown title="Admin" id="basic-nav-dropdown" className="text-white" style={{ marginTop: "20px", fontSize: "15px" }}>
                <NavDropdown.Item href="#">application</NavDropdown.Item>
                <NavDropdown.Item href="#">home</NavDropdown.Item>
                <NavDropdown.Item href="#">blog</NavDropdown.Item>
                <NavDropdown.Item href="#">contact</NavDropdown.Item>
              </NavDropdown>
</div>

     </div>




            </Container>


          <Nav.Item style={{ marginRight: '10px' }}>hello</Nav.Item>
          <Nav.Item style={{ marginRight: '10px' }}>hello</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
   

    </Container>
    
  );
}






export default Profile;
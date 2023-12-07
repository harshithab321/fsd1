import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Card, Button, Dropdown,ListGroup ,Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import details from './employeeprofile/data';
import './employeeprofile/employee.css';

function Template() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
    <style>{'body { background-color: #F0F0F0; margin:0px}'}</style>
     
   
            
            
           
    
         

    <Row xs={1} md={2} className="g-2 mt-2 px-3" style={{background:"white",marginLeft:"20px",marginRight:"20px"}}>
      <Col  className='noborder '>
        <Card>
       
        <Card.Body className='mt-4' style={{background:"white" ,width:"50rem" ,height:"200px"}}>
        <Card.Title></Card.Title>
        <Card.Text className="mt-5" style={{margin:"20px" ,marginLeft:"10px"}}>
        <Card.Img  src={details[0].profile}   roundedCircle
  style={{
    position: 'absolute',
    marginTop: "0px",
    width: "80px",
    maxWidth: "100%",
    height: "80px",
     // Set the position to fixed
    top: "20px", 
    borderRadius:"40px"// Adjust the top position according to your needs
  }}   />
         <div className='' style={{marginLeft:"7rem",marginTop:"-90px" , paddingTop: '1rem'}}>
          <p  className='mt-2 mr-6' style={{ lineHeight: '0', fontSize: '20px'}}>{details[1].profileinfo1.name}</p>
          <p  className="text-muted small"  style={{fontSize:"10px"}}   >{details[1].profileinfo1.team}</p>
          <p style={{ lineHeight: '1' }}>{details[1].profileinfo1.Role} </p>
          <p style={{fontSize: '15px'}} > Employee ID:{details[1].profileinfo1['Employee ID']}</p>
          <p style={{ lineHeight: '0', fontSize: '12px', marginTop:'-9px'}}>Date Of Join:{details[1].profileinfo1['Date Of Join']}</p>
          </div>
        </Card.Text>
        <Button     style={{ marginTop:"2px" , fontSize: '12px' ,marginLeft:"130px", background: 'linear-gradient(to right, #ff7e5f, #feb47b)' , border:"none"}}   >Send Message</Button>
      </Card.Body>







        </Card>
      </Col>
      <Col  className='noborder' style={{width:"600px"}} >
        <Card className='noborder' >
       
        <p> <FontAwesomeIcon  style={{marginLeft:"650px"}} className="text-muted  px-5" icon={faEdit} /></p>


        <Container col-6  className='d-flex justify-content-between custom-border'>
            <div  className='text-md-start' style={{marginLeft:"0px", marginTop:"-15px"}}>
          
            <h6  style={{ lineHeight: '3.9',fontSize:"14px" }} className='text-start'> Phone: </h6> 
       
       <h6  style={{ lineHeight: '0'  ,fontSize:"14px" ,marginTop:"-10px"}} className='text-start'> Email: </h6> 

       <h6  style={{ lineHeight: '3' ,fontSize:"14px" }} className='text-start'> Birthday: </h6>
 
       <h6  style={{ lineHeight: '0',fontSize:"14px" }} className='text-start'> Address: </h6>

        <h6 style={{ lineHeight:'2.7' ,fontSize:"14px"}}  className='text-start'> Gender: </h6>
 
        <h6  style={{ lineHeight: '0' ,fontSize:"14px"}} className='text-start'> Reports to: </h6>


            </div>
            <div  className='text-md-start position-sticky ' style={{marginLeft:"-300px" ,paddingLeft:"70px" }}>
        
  <div>
  <p className="text-muted small"  style={{ lineHeight: '0.9' ,marginLeft:"100px"}}>  <a href={`tel:${details[2].profiledetails.Phone}`} style={{ marginLeft: "-200px",textDecoration: "none"  }}>{details[2].profiledetails.Phone}</a></p>
           </div>

  <div>
  <p className="text-muted small"  style={{ lineHeight: '0.9' ,marginLeft:"100px"}}>  <a href={`tel:${details[2].profiledetails.Email}`} style={{ marginLeft: "-200px",textDecoration: "none"  }}>{details[2].profiledetails.Email}</a></p>
 
  </div>

  <div>
    <p   className="text-muted small"  style={{ marginLeft: "-100px",  lineHeight: '1' }}>  {details[2].profiledetails.Birthday}</p>
  </div>

  <div>
   <p  className="text-muted small"  style={{ marginLeft: "-100px",  lineHeight: '1' }}>  {details[2].profiledetails.Address}</p>
  </div>


<div>
    <p  className="text-muted small" style={{ marginLeft: "-100px",  lineHeight: '1' }}> {details[2].profiledetails.Gender}   </p>
</div>


<div>

      
<p className="text-muted small"  style={{ lineHeight: '0.9' ,marginLeft:"100px"}}>  <a href={`tel:${details[2].profiledetails['Reports To']}`} style={{ marginLeft: "-200px",textDecoration: "none"  }}>{details[2].profiledetails['Reports To']}</a></p>
   <Image src={details[0].profile} roundedCircle  style={{ width:"30px" ,height:"30px" ,borderRadius:"9px",marginLeft:"-140px" ,marginTop:"-60px"}}  />
</div>
            </div>
            </Container>


        </Card>
      </Col>
    </Row>

{/* 
//////////////////////////////// */}

















{/* ///////////////////////////////////////////////////////// */}


    <Row xs={1} md={7} className="g-4 px-3" style={{marginTop:"-20px"}}>
  <Col className="noborder">
    <Card className='px-3'>
    <div className='d-flex flex-wrap mt-3 ' >
          <p  className='p1' style={{marginLeft:"0px"}}><b>profile</b></p>
          <p  className='p1' style={{marginLeft:"50px"}}>Projects</p>
          <p  className='p1' style={{marginLeft:"50px"}}>Bank & Statutory(Admin Only)</p>
          <p className='p1'  style={{marginLeft:"50px"}}>Assets</p>
          </div>
    </Card>
  </Col>
</Row>





{/* ////////////////////////////////////////// */}
<Row xs={1} md={2} className="g-4 mt-1 px-3">
  <Col className="noborder">
    <Card className='px-3'>
   < h3>personal information</h3>
   <div  style={{marginTop:"-20px"}}> 
   <  FontAwesomeIcon className='mt-1' style={{marginTop:"50px", marginLeft:"650px",color:"gray",fontSize:"15px"}} icon={faEdit}/>
   </div>
      <Row>
        
    <Col>
   
    <h6 style={{ lineHeight: '2.7' ,fontSize:"14px" }}>Passport No</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>Passport Exp Date</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>Tel</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>Nationality</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>Religion</h6>
          <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Maritial Status</h6>
          <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Enjoyment Of Spouse</h6>
          <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>No.Of Children</h6>
          </Col>
          <Col>
          
           
    <p   style={{ lineHeight: '2.7' }}  className="text-muted small" >{details[3].personalinfo2['passport No']}</p>
          <p className="text-muted small"  style={{ lineHeight: '0.7' }}>{details[3].personalinfo2['passport Exp Date']}</p>
         <p className="text-muted small"  style={{ lineHeight: '0.9' ,marginLeft:"100px"}}>  <a href={`tel:${details[3].personalinfo2.Tel}`} style={{ marginLeft: "-100px",textDecoration: "none"  }}>{details[3].personalinfo2.Tel}</a></p>
          <p className="text-muted small"  style={{ lineHeight: '0.9' }}>{details[3].personalinfo2.Nationality}</p>
          <p className="text-muted small"  style={{ lineHeight: '0.9' }}>{details[3].personalinfo2.Religion}</p>
          <p className="text-muted small"  style={{ lineHeight: '0.9' }}>{details[3].personalinfo2['Marital Status']}</p>
          <p  className="text-muted small" style={{ lineHeight: '0.9' }}>{details[3].personalinfo2['Employment Of Spouse']}</p>
          <p className="text-muted small" style={{ lineHeight: '0.9' }}>{details[3].personalinfo2['Number  Of Children']}</p>

          </Col>
          </Row>

   
    </Card>
  </Col>
  <Col className="noborder mt-4"  style={{height:"250px"}} >

    <Card  className='px-3'>
   <Row  style={{height:"300px"}}>
   <h3 style={{marginTop:"14px",width:"900px",fontSize:"18px"}}>Emergency Contact <FontAwesomeIcon style={{marginLeft:"500px",marginTop:"-300px" ,lineHeight:"-10" ,color:"gray",fontSize:"15px"}} icon={faEdit}/></h3>
   <h6> primary</h6>
 <Col>
 
            <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Name</h6>
            <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Relationship</h6>
            <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Phone</h6>
 </Col>
           
<Col>
            <p  className="text-muted small"  style={{ lineHeight: '2' }}>{details[4].emergencycontact.Name1}</p>
         <p   className="text-muted small"  style={{ lineHeight: '0.3' }}>{details[4].emergencycontact.Relationship}</p>
        <p   className="text-muted small" style={{ lineHeight: '1.5' }}>{details[4].emergencycontact.Phone}</p>
            




</Col>

<hr width="-100px"/>
<Col>
<Row>
<h6 style={{marginTop:"-10px"}}> Secondary</h6>
    <Col>
    <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Name</h6>
            <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Relationship</h6>
            <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>Phone</h6>

    </Col>
    
    <Col>
    <p  className="text-muted small" style={{ lineHeight: '2',marginLeft:"10.5px" }}>{details[4].emergencycontact.Name}</p>
                <p className="text-muted small" style={{ lineHeight: '0.3' ,marginLeft:"10.5px" }}>{details[4].emergencycontact.Relationship1}</p>
                <p  className="text-muted small"style={{ lineHeight: '1.5',marginLeft:"10.5px"  }}>{details[4].emergencycontact.Phone2}</p>
              
    </Col>
    </Row>       
</Col>
 </Row>
    </Card>
  </Col>
</Row>




{/* 
/////////////////////////////////////////////// */}


<Row xs={1} md={2} className="g-4 mt-3 px-3"  style={{height:"200px"}} >
  <Col className="noborder">
    <Card className='px-3' >
<Row   style={{height:"190px"}}>
<h3 style={{marginTop:"14px",width:"900px" ,fontSize:"17px"}}>Bank Information</h3>
     
<Col>
<p>{details[5].BankName}</p>
<h6 style={{ lineHeight: '2.7',fontSize:"14px" }}>Bank No</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>Bank Account No</h6>
          <h6 style={{ lineHeight: '1.5',fontSize:"14px" }}>IFSC Code</h6>
          <h6 style={{ lineHeight: '1.5' ,fontSize:"14px" }}>PAn No</h6>
          
</Col>
<Col>
<p>{details[5].BankName}</p>
          <p  className="text-muted small" style={{ lineHeight: '1' }}>{details[5].bankinfo['Bank Name']}</p>
          <p  className="text-muted small" style={{ lineHeight: '1' }}>{details[5].bankinfo['Bank Account No']}</p>
          
          <p  className="text-muted small"  style={{ lineHeight: '1' }}>{details[5].bankinfo['IFSC Code']}</p>
          <p  className="text-muted small" style={{ lineHeight: '1.3' }}>{details[5].bankinfo['PAn No']}</p>
          
</Col>
</Row>
    </Card>
  </Col>



  <Col className="noborder">
    
    <Card className='px-3'>
    <h3 style={{marginTop:"14px",width:"900px",fontSize:"18px"}}>Family Information <FontAwesomeIcon style={{marginLeft:"500px",marginTop:"-300px" ,lineHeight:"-10",color:"gray",fontSize:"15px"}} icon={faEdit}/></h3>
          <hr style={{marginTop:"40px"}}  />


    <Table hover size="sm">
     
      
     <thead style={{marginTop:"10px"}} className="move-row ">
        <tr>
         <th  style={{fontSize:"14px"}}>
           Name
         </th>
         <th  style={{fontSize:"14px"}}>
           Relationship
         </th>
         <th  style={{fontSize:"14px"}}>
           Date Of Birth
         </th>
        </tr>
     </thead>
     <tbody>
       <tr>
     
         <td  className="text-muted small" >{details[6].familyinfo.Name}</td>
         <td  className="text-muted small" >{details[6].familyinfo.Relationship}</td>
         <td  className="text-muted small" >{details[6].familyinfo['Date Of Birth']}</td>
         <td  className="text-muted small">{details[6].familyinfo.Phone}</td>
         <td> 
        
         <Dropdown show={dropdownVisible} onClick={toggleDropdown} drop="none">
     <Dropdown.Toggle variant="white" id="dropdown-basic" className="custom-toggle">
       {/* Your three-dot icon or any other content */}
       &#8942;
     </Dropdown.Toggle>

     <Dropdown.Menu>
       {/* Your dropdown menu items go here */}
       <Dropdown.Item>name</Dropdown.Item>
       <Dropdown.Item>Phone no</Dropdown.Item>
       
     </Dropdown.Menu>
   </Dropdown>
      </td>
       </tr>


      
     </tbody>
   </Table>





    </Card>
  </Col>
  </Row>
{/* /////////////////////////////////// */}

<Row xs={1} md={2} className="g-4 mt-3 px-3" >
  <Col className="noborder">
    <Card className='px-3'>
    <h3 style={{marginTop:"14px",width:"900px",fontSize:"20px"}}>Education Information<FontAwesomeIcon style={{marginLeft:"450px",marginTop:"-300px" ,lineHeight:"-10",color:"gray",fontSize:"15px"}} icon={faEdit}/></h3>
        
        <ul className="bar" style={{marginLeft:"-30px"}}>
        
  <li> {details[7].education.College1}
      <p className="text-muted small" style={{ lineHeight: '0',marginLeft:"25px" }} > {details[7].education.Department1}</p>
      <p  className="text-muted small" style={{ lineHeight: '1',marginLeft:"25px" ,fontSize:"11px"}} > {details[7].education.Year1}</p>
  
  </li>
  <li> 
  {details[7].education.College2}
      <p  className="text-muted small" style={{ lineHeight: '0',marginLeft:"25px" }} > {details[7].education.Department2}</p>
      <p className="text-muted small" style={{ lineHeight: '1',marginLeft:"25px" ,fontSize:"11px"}} > {details[7].education.Year2}</p>
  


  </li>
  
</ul>




    </Card>
  </Col>
  <Col className="noborder">
    <Card className='px-3'>
     
    <h3 style={{marginTop:"14px",width:"900px",fontSize:"20px"}}>Experience<FontAwesomeIcon style={{marginLeft:"570px",marginTop:"-300px" ,lineHeight:"-10" ,color:"gray",fontSize:"15px"}} icon={faEdit}/></h3>
    
        <ul className="bar" style={{marginLeft:"-30px"}}>
        
  <li> {details[8].experience.designer1}
      <p  className="text-muted small" style={{ lineHeight: '0',marginLeft:"25px" ,fontSize:"10px"}} > {details[8].experience.year1}</p>
  
  
  </li>
  <li> 
  {details[8].experience.designer2}
      <p  className="text-muted small" style={{ lineHeight: '0',marginLeft:"25px",fontSize:"10px" }} > {details[8].experience.year2}</p>
  </li>

  <li> 
  {details[8].experience.designer3}
      <p  className="text-muted small" style={{ lineHeight: '0',marginLeft:"25px",fontSize:"10px" }} > {details[8].experience.year3}</p>
  </li>
  
</ul>

     
    </Card>
  </Col>
</Row>












        
    </>
  );
}

export default Template;

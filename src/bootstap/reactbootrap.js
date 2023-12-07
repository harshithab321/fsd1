import react ,{useState}from 'react'
import { Container,Row,Col,Form,Alert, Button } from "react-bootstrap"


function App8(){
const[city,setCity]=useState('')
const[weather1,setWeatherData]=useState(null)
const[error,setError]=useState(null)


const FetchWeather =async()=>{

    try{
        const apikey = 'd536e38a87a6e4f5793c581ae7285b4a';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
           
        if(!response.ok){
            throw new Error("city not found")
        }
        const data=await response.json()
        setWeatherData(data)
       
        setError(null)
    }
    catch(error)
    {
        setWeatherData(null)
        setError("city not found")
    }
}





return(


    <Container className='mt-4'>
        <Row>
            <Col>
            <h1>Weather App</h1>
            <Form>
              
                    <Form.Group controlId='cityForm'>
                        <Form.Label>Enter city</Form.Label>
                        <Form.Control type="text"
                         placeholder='enter a city'
                         value={city}
                         onChange={(e) => setCity(e.target.value)} 

                          >
                          </Form.Control>
                          </Form.Group>
                          <Button variant="primary" onClick={FetchWeather}>Get weather
                            
                          </Button>
                </Form>
            </Col>
        </Row>
    {error && (
        <Row className='"mt-3'>
            <Col>
            <Alert variant="danger">{error}</Alert>
            </Col>
        </Row>
    )}
    
    {weather1 && (
        <Row className='"mt-3'>
            <Col>
            <h2>
                {weather1.name},{weather1.sys.country}
                
            </h2>
            <p> temperature:{weather1.main.temp}c</p>
            <p>weather:{weather1.weather[0].description}</p>
            </Col>

            <Col>
            <h2>
                {weather1.name},{weather1.sys.country}
                
            </h2>
            <p> temperature:{weather1.main.temp}c</p>
            <p>weather:{weather1.weather[0].description}</p>
            </Col>
        </Row>
    )}
    <Row>

    <Col>
            <h2>
                {weather1.name},{weather1.sys.country}
                
            </h2>
            <p> temperature:{weather1.main.temp}c</p>
            <p>weather:{weather1.weather[0].description}</p>
            </Col>
    </Row>
    </Container>
)



}
export default App8
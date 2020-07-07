import React from 'react';
import logo from './img/flooop.png';
import './App.css';
import { Navbar, Card, Nav, NavDropdown, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import SliceImg1 from "./img/1.jpg"
import SliceImg2 from "./img/2.jpg";
import SliceImg3 from "./img/3.jpg";
import CardImg from "./img/4.png"

const App = (props) => {
  return (
    <div className="App">
      <header>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt=""></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliceImg1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliceImg2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliceImg3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="item">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>May Tinh</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>May Tinh</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={CardImg} />
              <Card.Body>
                <Card.Title>May Tinh</Card.Title>
              </Card.Body>
            </Card>
            
          </div>
      </body>
  </div> 
  )   
}

export default App;

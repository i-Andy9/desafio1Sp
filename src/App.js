import React,{ useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import Error404 from './Components/Error404';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import AllProjects from './Components/AllProjects';

import { Col, Container, Row } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
  
function App() {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  <Router>
          <Row>
            <Col>
              <Navbar  color="light" light expand="md">
                  <Container className='jc-sb'>
                    <Link  to="/" style={{textDecoration:'none', animation:'none',color:'black' }} className='mgA'><h3>CAJASP</h3></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse className='jc-sb ' isOpen={isOpen} navbar>
                    <Nav className="mr-auto mgA" navbar>
                        <NavItem >
                        <Link style={{textDecoration:'none', animation:'none',color:'black', marginLeft:'15px' }} to="seccionAbout">Nostros somos...</Link>
                        </NavItem>
                        <NavItem>
                        <Link style={{textDecoration:'none', animation:'none',color:'black', marginLeft:'15px' }} to='/AllProjects'>Proyectos</Link>
                        </NavItem> 
                    </Nav>
                    <NavbarText>Innova y mejora con Nostros, CAJASP</NavbarText>
                    </Collapse>
                  </Container>
              </Navbar>
            </Col>
          </Row> 
      
      
      
      <Switch>
        
        
          <Route exact path='/AllProjects' component={AllProjects} />
         
        
        <Route exact path='/' component={Landing} />
            
        <Route exact path='*' component={Error404}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

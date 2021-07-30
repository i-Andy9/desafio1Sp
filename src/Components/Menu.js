import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Container
  } from 'reactstrap';
import { Col, Row } from 'reactstrap'
import '../App.css'
import {NavLink, Route,  BrowserRouter as Router, Switch, Link } from "react-router-dom";
//import AllProjects from './AllProjects';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        
        <Row>
            <Col>
                <Navbar  color="light" light expand="md">
                    <Container className='jc-sb'>
                    <NavbarBrand className='mgA ' href="/">CAJASP</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse className='jc-sb ' isOpen={isOpen} navbar>
                    <Nav className="mr-auto mgA" navbar>
                        <NavItem >
                        <Link style={{ paddingLeft: '13', textDecoration : 'none'}} to="">Nostros somos...</Link>
                        </NavItem>
                        <NavItem>
                        <NavLink style={{ paddingLeft: '13', textDecoration : 'none'}} to='/AllProjects'>Proyectos</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Innova y mejora con Nostros, CAJASP</NavbarText>
                    </Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row> 

    )
}

export default Menu

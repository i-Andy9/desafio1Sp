import React from 'react'
import { Image } from 'react-bootstrap'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import logoI from '../Assets/Logo/rrssInstagram.png'
import logoF from '../Assets/Logo/rrssFacebook.png'
import logoL from '../Assets/Logo/rrssLinkedin.png'


const Footer = () => {
    return (
        <Row style={{background:'#333'}}>
            <Col xs='12'sm={{size:'12'}}>

                <Row className='mt-5 mb-5'>
                    
                    <Col xs='12' sm={{size:'6', offset:1}} style={{marginLeft:'20px'}}>
                        <h2 className='text-center' style={{color:'white'}}>Si desea Innovar con Nosotros</h2>
                        
                        <Form>
                            <Col xs='12' sm={{size:'6', offset:3}}>
                                <FormGroup>
                                    <Label for='name' style={{color:'white'}}>Nombre</Label>
                                    <Input type='string' name='nombre' id='idNombre' placeholder='Ingrese Su Nombre' required></Input>
                                </FormGroup>
                            </Col>

                            <Col xs='12' sm={{size:'6', offset:3}}>
                                <FormGroup>
                                    <Label for='email' style={{color:'white'}}>Email</Label>
                                    <Input type='email' name='email' id='idEmail' placeholder='Ingrese Su correo' required></Input>
                                </FormGroup>                                    
                            </Col>

                            <Col xs='12' sm={{size:'6', offset:3}}>
                                <FormGroup>
                                    <Label for='phone' style={{color:'white'}}>Telefono </Label>
                                    <Input type='number' name='phone' id='idPhone' placeholder='Ingrese Su Telefono de Contacto' required></Input>
                                </FormGroup>                                    
                            </Col>

                            <Col xs='12'  sm={{size:'6', offset:3}}>
                                <FormGroup>
                                    <Label for="exampleSelect" style={{color:'white'}}>Tipo de Asunto</Label>
                                    <Input type="select" name="select" id="idSelect" placeholder='Tipo de Asunto' required>
                                        <option>Desarrollo Software a medida</option>
                                        <option>Sitios Web</option>
                                        <option>Hosting</option>
                                        <option>Soporte</option>
                                        <option>Aoutsour</option>
                                    </Input>
                                </FormGroup>  
                            </Col>

                            <Col xs='12'  sm={{size:'6', offset:3}}>
                                <FormGroup>
                                    <Label for="mensaje" style={{color:'white'}}>Mensaje</Label>
                                    <Input type="textarea" name="msj" id="idMsj" required/>
                                </FormGroup>
                            </Col>
                            <Col className='mt-5' xs='12'  sm={{size:'6', offset:3}}>
                                 <a className='btn btn-secondary'> Enviar Solitictud </a>
                            </Col>
                        </Form>

                    </Col>
                    
                    <Col mt='5'style={{marginLeft:'20px'}} xs='12' sm={{size:'5', offset:1}}>
                        <Row>
                            <Col xs='12' className='' sm={{size:'12'}} >
                                <h3 style={{color:'white'}}> Redes Sociales </h3>
                                    <Col className='mt-4' sm={{size:'6'}}>
                                        
                                        <a style={{textDecoration:'none'}} href="https://www.instagram.com/">
                                            <h4 style={{color:'white'}}> Instagram</h4>
                                            <Image src={logoI} className="icon" style={{maxHeight:'50px'}}  />
                                        </a>
                                        
                                    </Col>
                                    <Col className='mt-4' sm={{size:'6'}}>
                                        
                                        <a style={{textDecoration:'none'}} href="https://www.linkedin.com/home">
                                            <h4 style={{color:'white'}}> Linkedin</h4>
                                            <Image src={logoL} className="icon" style={{maxHeight:'50px'}}  />
                                        </a>
                                        
                                    </Col>
                                    <Col className='mt-4' sm={{size:'6'}}>
                                        
                                        <a style={{textDecoration:'none'}} href="https://es-la.facebook.com/">
                                            <h4 style={{color:'white'}}> Facebook</h4>
                                            <Image src={logoF} className="icon" style={{maxHeight:'50px'}}  />
                                        </a>
                                        
                                    </Col>
                            </Col>
                        </Row>
                    </Col>

                </Row>

                <p className='text-center' style={{color:'white'}}>
                &copy;{new Date().getFullYear()} CAJASP - Derechos Resevados - Designed by Andy9
                </p>

            </Col>
        </Row>
    )
}

export default Footer

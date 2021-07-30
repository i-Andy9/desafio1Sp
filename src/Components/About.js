/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import '../App.css'
import { Col, Container, Row } from 'reactstrap'
import img from '../Assets/Img/mh2xqdfi.bmp'
import { Image } from 'react-bootstrap'

const About = () => {
    return (
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xs='12' sm={{size:'12'}}>
                    <Row>
                        <Col md='5'>
                            <h4 className='text-right'> // Nosotros </h4>
                            <h1 className='socio'> Su socio para la innovacion</h1>
                                <p className='mt-3 p'>En CAJASP apostamos por el talento y la creatividad como principales virtudes
                                    de nuestros colaboradores. Somos un equipo de profesionales jóvenes emprendedores,
                                    motivados y enfocados en el crecimiento y desarrollo de nuestros proyectos.
                                    Queremos entregar tranquilidad y facilidad a nuestros clientes por medio de una basta variedad de soluciones digitales.
                                <br/>
                                Contamos con un staff encargado de liderar, aprovechar y cosechar el talento de profesionales independientes,
                                otras empresas, equipos y consultores. De esta forma nuestro modelo es flexible respecto del uso de la tecnología
                                y las metodologías, siendo versátil en la adaptación a las necesidades de cada desafío. </p>
                        </Col>
                        <Col className='c-i-r ' md='7'>
                            <Image fluid src={img} className='img-resp' style={{width: '100%', display:'grid', alignItems:'center'}}/>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
    )
}

export default About

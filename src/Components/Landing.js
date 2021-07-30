import React, { useState } from 'react'
import '../App.css'
import { Parallax } from 'react-parallax'
import '../Assets/CSS/CardStyle.css'
import { Col, Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, 
    Card,
    Button,
    Container} from 'reactstrap'
import { Image } from 'react-bootstrap'
//Home
import fondo from '../Assets/Img/689772.jpg'
//About
import img from '../Assets/Img/mh2xqdfi.bmp'
//carrusel
import img1 from '../Assets/Img/bhxvgs3h.bmp'
import img2 from '../Assets/Img/qz9zny6a.bmp'
import img3 from '../Assets/Img/z (24).jpg'
//Push
import {  Link, useHistory } from 'react-router-dom';
//Projects
import log1 from '../Assets/Logo/box.png'
import log2 from '../Assets/Logo/flags.png'
import log3 from '../Assets/Logo/pared.png'
import log4 from '../Assets/Logo/robot.png'
import log5 from '../Assets/Logo/rombo.png'
import log6 from '../Assets/Logo/windows.png'

const items = [
    {
      src: img1,
      altText: 'link to fb',
      link: 'https://es-la.facebook.com/',
      caption: 'Desarrollo de Software a medida'
    },
    {
      src: img2,
      link:'https://www.instagram.com/',
      altText: 'link to instagram',
      caption: 'Estrategia comercial'
    },
    {
      src: img3,
      altText: 'link to tiktok',
      link:'https://www.tiktok.com/es',
      caption: 'Innovacion con redes sociales'
    }
  ];
  

const Landing = () => {

    const history = useHistory()
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem

            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <a href={item.link}> <Image src={item.src} fluid   alt={item.altText} style={{maxHeight:'980px', width:'100%'}} /></a>
            
            <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
        );

    });


    return ( 
<>
{/* Paralalx */}
        <seccion id='seccionCAJASP'>
            <Row>
                <Col>
                    <Parallax 
                    fluid
                    bgImage={fondo}
                    strength={300}
                    renderLayer={percentage => (
                        <div
                            style={{
                                position:'absolute',
                                width: percentage * 10,
                                height: percentage * 10,
                                
                            }}
                        />
                    )}
                    >
                        <Row style={{height:'94vh'}}> 
                                <Col className='text-center' style={{ size:'6',offset:3, justifyContent: 'center',display: 'flex',alignItems: 'center'}}> 
                                    <h1 className='caja'> CAJASP</h1>
                                </Col> 
                        </Row>
                    </Parallax>
                </Col>
            </Row>
        </seccion>
{/* About */}            
        <seccion id='seccionAbout'>
            <Row className='mt-5 mb-5'>
                <Col xs='12' sm={{size:'11', offset: 1}}>
                    <Row>
                        <Col sm={{size:'6'}}>
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
                        <Col className='c-i-r ' md='5'>
                            <Image fluid src={img} className='img-resp' style={{width: '100%', display:'grid', alignItems:'center'}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </seccion>
{/* Carrusel */}
        <seccion id='seccionCarrusel'>
            <Row>
                <Col>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </seccion>
{/* Projects */}
           
    <h1 className='text-center mt-5' > Proyectos</h1>
    <Container>
       
        <Row  className=''>
            
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'128px'}} src={log1} />
                                <h3>Shopify</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Integracion de diseño Web y diseño de DB</p>
                                <h6 className='text-right'> Julio, 2020</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'128px'}} src={log2}/>
                                <h3>Coca-Cola</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Modelamiento de proceso de negocio e implementacion de requerimientos de aplicacion</p>
                                <h6 className='text-right'> Diciembre, 2010</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"/>
                                <h3>Tesla</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Re-Ingenieria de procesos</p>
                                <h6 className='text-right'> Septiembre, 2019</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'128px'}} src={log3}/>
                                <h3>Tik Tok</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p> Diseño y programacion de requerimientos y maquetacion de efectos</p>
                                <h6 className='text-right'> Diciembre, 2020</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'150px'}} src={log4}/>
                                <h3>Nasa</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Proyecto de robotica basado en IA  </p>
                                <h6 className='text-right'> Agosto, 2018</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'150px'}} src={log5}/>
                                <h3>Pentagrama </h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Creacion de plataforma web interactiva para creacion de diseño</p>
                                <h6 className='text-right'> Junio, 2019</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'150px'}} src={log3}/>
                                <h3> Supermercado <br/>Cugat</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Diseño y reestructucarion de Infraestructura informatica</p>
                                <h6 className='text-right'> Enero, 2021</h6>
                            </div>
                        </div>
                    </Card>
                </Col>
                
                <Col  xs='12' md='4'className='mgt' >
                    <Card fluid>
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'128px'}} src={log6}/>
                                <h3>Microsoft</h3>                                
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Desarrollo de Sistema Operativo </p>
                                <h6 className='text-right'> Enero, 2019- Now</h6>
                            </div>
                        </div>
                    </Card>
                </Col>

{/* redireccion all projects */}         
                <Col  xs='12' md='4'className='mgt' >
                    <Card >
                        <div class="face face1">
                            <div class="content">
                                <img style={{height:'128px'}} src={log1}/>
                                <h3>Necesitas <br/>ver mas?</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <p>Mira mas Proyectos!!!</p>
                                    <Link to="/AllProjects">Presioname</Link>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

</>                
    )
}

export default Landing

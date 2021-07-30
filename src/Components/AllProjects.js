
import React, {useEffect } from 'react'
//logos
import log1 from '../Assets/Logo/box.png'
import log2 from '../Assets/Logo/flags.png'
import log3 from '../Assets/Logo/pared.png'
import log4 from '../Assets/Logo/robot.png'
import log5 from '../Assets/Logo/rombo.png'

import { /* Card, Col ,*/ Container, Row } from 'reactstrap'

const AllProjects = () => {

    const P1= {
                logo: log1,
                cliente: 'CocaCola',
                desc: 'Integracion de diseño Web',
                fecha: 'Diciembre, 2018'
            }
    const P2= {
                logo:log2,
                cliente: 'Instagram',
                desc: 'Modelamiento de proceso de negocio e implementacion de requerimientos de aplicacion',
                fecha: 'Diciembre, 2018'
            }
    const P3= {
                logo:log3,
                cliente: 'Shopify',
                desc: 'Integracion de diseño Web',
                fecha: 'Diciembre, 2018'
            }
    const P4= {
                logo:log4,
                cliente: 'Tesla',
                desc: 'Integracion de diseño Web',
                fecha: 'Diciembre, 2018'
            }
    const P5= {
                logo:log5,
                cliente: 'Nasa',
                desc: 'Integracion de diseño Web',
                fecha: 'Diciembre, 2018'
            }

        

    const arr=[ P1,P2,P3,P4,P5]
    const arrV=[]
    var arrF=[]
    
    const addArr = () => arrF=[...arrV,arr]           


    useEffect(()=>{
            for (let i = 0; i < 8; i++) {
            addArr()
            }
            
        },[addArr])

    console.log(arrF)
    return (
        <Container>
            <Row>
                {
                    arrV.map((obj)=> {
                        /* return(
                        )    */     
                    })
                }
            </Row>
        </Container>
    )
}

export default AllProjects

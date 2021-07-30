import React from 'react'
import { Parallax } from 'react-parallax'
import { Col, Row } from 'reactstrap'
import fondo from '../Assets/Img/689772.jpg'

const CASASP = () => {
    return (
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


            
    )
}

export default CASASP

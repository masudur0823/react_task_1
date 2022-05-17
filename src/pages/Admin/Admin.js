import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Modals from './Modals/Modals';

function Admin() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className='d-flex justify-content-between p-4 border-bottom'>
                <h1>Digg</h1>
                <button>Save & Share</button>
            </div>
            <Row className='m-0'>
                <Col lg="3" className='px-3 border-end'>
                    <div style={{ minHeight: "100vh" }}>
                        <h3 className='text-center'>Add Question</h3>
                        <div>
                            <button className='w-100' onClick={() => setModalShow(true)}>+</button>
                            <Modals
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                </Col>
                <Col lg="8"></Col>
            </Row>
        </>
    )
}

export default Admin
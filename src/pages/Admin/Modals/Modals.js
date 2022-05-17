import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

function Modals(props) {
  const handleShortAns = () =>{
    
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Question type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='text-center g-4 m-0'>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={{handleShortAns}}>
                  Short Answer
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}}>
                  Long Answer
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}}>
                  Multiple Choice
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}}>
                  Text
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}}>
                  True / False
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}}>
                  Multiple Answers
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modals
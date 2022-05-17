import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'

function Modals(props) {
  const handleShortAns = () =>{
    const close = props.onHide;
    close();
  }
  const handleLongAns = () =>{
    const close = props.onHide;
    close();
  }
  const handleMultipleChoice = () =>{
    const close = props.onHide;
    close();
  }
  const handleText = () =>{
    const close = props.onHide;
    close();
  }
  const handleTrueFalse = () =>{
    const close = props.onHide;
    close();
  }
  const handleMultipleAnswer = () =>{
    const close = props.onHide;
    close();
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
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleShortAns}>
                  Short Answer
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleLongAns}>
                  Long Answer
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleMultipleChoice}>
                  Multiple Choice
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleText}>
                  Text
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleTrueFalse}>
                  True / False
              </div>
            </Col>
            <Col md="4">
              <div className='border p-3' style={{cursor:'pointer'}} onClick={handleMultipleAnswer}>
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
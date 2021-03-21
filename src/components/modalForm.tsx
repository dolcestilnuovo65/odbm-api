import * as React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


class ModalForm extends React.Component {
    isOpen:boolean = false;
    
    handleClose = () =>{

    }

    
    handleChange = () =>{


    }
    
    closeModal = () => {

    }

    
    handleSubmit = (e) =>{

    }


    render(){
        return(
          <>
            <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
            >
            </div>
      
            <Modal 
              show={this.isOpen} 
              onHide={this.closeModal}
              backdrop="static"
            >
            <Modal.Header closeButton>
              <Modal.Title>Modal Form Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} value={(this.state as any).name} placeholder="name input"/>           
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={() => this.handleSubmit((this.state as any).name)}>
                    Submit
                </Button>
            </Modal.Footer>
          </Modal>
        </>
        )
      }
  }
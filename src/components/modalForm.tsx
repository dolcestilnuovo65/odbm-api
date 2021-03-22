import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


interface Props{
    isOpen:boolean,
    closeModal:Function,
    handleSubmit:Function,
    handleChange(n: any):void
  }
  

  interface State{
  name:string
  }
  

export default class ModalForm extends Component<Props, State> {
    constructor(props){
        super(props);
        this.state={
            name:"NUOVO NOME"
        }
   

    }
   

    isOpen:boolean = false;
    
    handleClose = () =>{

    }

    
    handleChange = (e) =>{
        


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
              show={this.props.isOpen} 
              onHide={this.props.closeModal}
              backdrop="static"
            >
            <Modal.Header closeButton>
              <Modal.Title>Nuova Torta</Modal.Title>
           </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange}  placeholder="name input"/>       
                    <Form.Label>Prezzo: </Form.Label>
                    <Form.Control type="text" onChange={this.props.handleChange}  placeholder="name input"/>       
                    <Form.Control size="lg" type="text" placeholder="Large text" />
                    <Form.Control type="file" name="fileToUpload" id="fileToUpload"></Form.Control>    
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>                
                <Button variant="primary" type="submit" onClick={() => this.props.handleSubmit(this.state.name)}>
                    Submit
                </Button>

            </Modal.Footer>
          </Modal>
        </>
        )
      }
  }
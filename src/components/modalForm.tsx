import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Cake, CakeFactory } from '../data/cake';
import { RemoteCollection } from '../lib/backbone';
import { CallTracker } from 'node:assert';


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
    titleRef:any;
    constructor(props){
        super(props);
        this.state={
            name:"NUOVO NOME"
        }
        this.titleRef = React.createRef();

    }
   

    isOpen:boolean = false;
    
    handleClose = () =>{

    }

    
    handleChange = (e) =>{
        let f = e;



    }
    
    closeModal = () => {

    }

    
    handleSubmit = (e) =>{
        let cake = new CakeFactory().newObject();
        let pub = cake.getPublicMember();
        for(let mem of pub)
          cake[mem] = $('#' + mem).val() 

       
          
         let tmpCakeColl  = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());
         tmpCakeColl.fetchData('1');
         let newId = tmpCakeColl.GetMaxId() + 1;

         cake.id = newId.toString();
         cake.Poster = cake.Title + ".jpg";
         cake.dateMade = new Date();
         cake.price = cake.price + '€';

         tmpCakeColl  = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());

     

        tmpCakeColl.Add(cake);
        tmpCakeColl.save();
        
        this.isOpen = false;

        this.props.handleSubmit();
        this.props.closeModal();
   



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
                    <Form.Control id="Title" type="text" onChange={this.handleChange} ref={this.titleRef}  />       
                    <Form.Label>Prezzo: </Form.Label>
                    <Form.Control id="price" type="text" onChange={this.handleChange}  />  
                    <Form.Label>Disponibità: </Form.Label>
                    <Form.Control id="num" type="text" onChange={this.handleChange}  />  
                    <Form.Label>Ingredienti: </Form.Label>
                    <Form.Control id="recipt" as="textarea" rows={3} onChange={this.handleChange} />     

                    <Form.Control type="file" name="fileToUpload" id="fileToUpload"></Form.Control>    
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>                
                <Button variant="primary" type="submit" onClick={() => this.handleSubmit(this.state.name)}>
                    Submit
                </Button>

            </Modal.Footer>
          </Modal>
        </>
        )
      }
  }
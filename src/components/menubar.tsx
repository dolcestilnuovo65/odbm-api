import * as React from 'react';
import { Button } from 'react-bootstrap';
import ModalForm from './modalForm'


export default class menuBar extends React.Component {
  state = {
    isOpen: false,
    
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleSubmit = (name) =>{




  }; //some code
  handleChange = (e) => {};

   render(){
     
  return (
    <div>
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <Button size="lg" onClick={this.openModal}>+</Button>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
           role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/cakes">Action</a>
            <a className="dropdown-item" href="/series">Another action</a>
            
          </div>

        </li>
        
      </ul>





{ this.state.isOpen ? 
  <ModalForm 
    closeModal={this.closeModal} 
    isOpen={this.state.isOpen} 
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
  /> 
  : 
  null 
}
</div>

    )
  } 
}

function e(e: any): (n: any) => Function {
  throw new Error('Function not implemented.');
}

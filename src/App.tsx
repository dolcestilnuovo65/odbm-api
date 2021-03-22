import React, { Component } from 'react';

import './App.css';
import CakeList from './components/cake_list';
import NavBar from './components/navbar'
import { Cake, CakeFactory } from './data/cake';
import { RemoteCollection, setUrlBackbone, setVirtualDB } from './lib/backbone';
const PHOTOPATH:string='http://localhost/cake-react/foto/'

class App extends Component {
  cakeColl:RemoteCollection<Cake>;
  constructor(props){
    super(props);
    setUrlBackbone("http://localhost/cake-react/php/genericitemEx.php");
    setVirtualDB('c:/ADVsec/cake-react', 'DB');
    this.cakeColl = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());

     this.cakeColl.fetchData('1');
   
     let tmpCakeColl  = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());
//     tmpCakeColl.Add(new Cake(4,"Meringata","Preparazione",PHOTOPATH + 'meringata.jpg'));
//     tmpCakeColl.save();
      tmpCakeColl.Add(new Cake(5,"Torta Profiterol","Preparazione",PHOTOPATH + 'meringata.jpg'));
      tmpCakeColl.save();




    // let cake = new Cake(1,"Torta di mele","Preparazione",PHOTOPATH + 'torta-di-mele.jpg');
    // this.cakeColl.Add(cake);
    // cake = new Cake(2,"Tiramisu","Preparazione",PHOTOPATH + 'TIRAMISU.jpg');
    // this.cakeColl.Add(cake);
    //this.cakeColl.Add(new Cake(3,"Torta al cioccolato","Preparazione",PHOTOPATH + 'cioccolato.webp'));
    // this.cakeColl.save();

    // this.cakeColl.save();
    


    this.state = {
       cakes :  [],
       totalCount: 0
    }


    
  }
  searchCakes = (term = '') =>{
     if(term.length< 3){
       return
     }
 

  }
  componentDidMount(){
    this.setState({
      cakes : this.cakeColl.items,
      totalCount : this.cakeColl.items.length
    })
   


  }
  render() {
    return (
      <React.Fragment>
      <NavBar onSearchTerm = {this.searchCakes} />
      <div className="container">
       <h1>My favorite cakes </h1>
       <CakeList cakes={ (this.state as any).cakes } />
      </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import CakeList from './components/cake_list';
import NavBar from './components/navbar'
import { Cake, CakeFactory } from './data/cake';
import { URLBACKBONE } from './Global';
import { RemoteCollection, setUrlBackbone, setVirtualDB } from './lib/backbone';

class App extends Component {
  cakeColl:RemoteCollection<Cake>;
  constructor(props){
    super(props);
    setUrlBackbone(URLBACKBONE);
    setVirtualDB('c:/ADVsec/cake-react', 'DB');
    this.cakeColl = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());

     this.cakeColl.fetchData('1');
   
     const ricette:string =  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
      , sunt in culpa qui officia deserunt mollit anim id est laborum`;
     
    
    

    //  let tmpCakeColl  = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());
 
     

    //  tmpCakeColl.Add(new Cake(1,"Torta di mele",ricette,'torta-di-mele.jpg','2','15	€',new Date()));
    //  tmpCakeColl.Add(new Cake(2,"Tiramisu",ricette,'TIRAMISU.jpg','3','13	€',new Date()));
    //  tmpCakeColl.Add(new Cake(3,"Torta al cioccolato",ricette,'cioccolato.webp','3','20	€',new Date()));
    //  tmpCakeColl.Add(new Cake(4,"Meringata",ricette,'meringata.jpg','3','18	€',new Date()));
    //  tmpCakeColl.Add(new Cake(5,"Torta Profiterol",ricette,'profiterol.jpg','2','17	€',new Date()));
    //  tmpCakeColl.save();




 
    


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

  onNewCake = () =>{

    this.cakeColl.fetchData('1');
    this.setState({
      cakes : this.cakeColl.items,
      totalCount : this.cakeColl.items.length
    })
   

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
      <NavBar onSearchTerm = {this.searchCakes} onNewCake={this.onNewCake}/>
      <div className="container">
       <h1>Le nostre torte </h1>
       <CakeList cakes={ (this.state as any).cakes } />
      </div>
      </React.Fragment>
    );
  }
}

export default App;

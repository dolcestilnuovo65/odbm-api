import React, { Component } from 'react';

import './App.css';
import CakeList from './components/cake_list';
import NavBar from './components/navbar'
import { Cake, CakeFactory } from './data/cake';
import { RemoteCollection } from './lib/backbone';
const APIKEY = '4cb9def9';
const APIURL = 'http://www.omdbapi.com';

function fetchCakes(search = '') {

  return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
    
};
class App extends Component {
  cakeColl:RemoteCollection<Cake>;
  constructor(props){
    super(props);
    let cake = new Cake(1,"Torta di mele","Preparazione",'01.jpg');
    this.cakeColl = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());
    this.cakeColl.Add(cake);
    cake = new Cake(2,"Tiramisu","Preparazione",'02.jpg');
    this.cakeColl.Add(cake);
  
    this.cakeColl.save();
    


    this.state = {
       cakes :  [],
       totalCount: 0
    }


    
  }
  searchCakes = (term = '') =>{
     if(term.length< 3){
       return
     }
     fetchCakes(term).then(res => {
      this.setState({
        cakes : this.cakeColl.items,
        totalCount : res.totalResults
      })
    })

  }
  componentDidMount(){
    this.searchCakes('back to the future')
   


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

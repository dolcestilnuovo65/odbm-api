import React, { Component } from 'react';

import './App.css';
import CakeList from './components/cake_list';
import NavBar from './components/navbar'
import { Cake, CakeFactory } from './data/cake';
import { RemoteCollection } from './lib/backbone';
const APIKEY = '4cb9def9';
const APIURL = 'http://www.omdbapi.com';

function fetchMovies(search = '') {

  return fetch(APIURL + '?apikey=' + APIKEY +'&s='+ search).then( res => res.json());
    
};
class App extends Component {
  cakeColl:RemoteCollection<Cake>;
  constructor(props){
    super(props);
    let cake = new Cake(1,"Torta di mele","Preparazione",'01.jpg');
    let CakeColl = new RemoteCollection<Cake>('CakeCollection','1',new CakeFactory());
    CakeColl.Add(cake);
    cake = new Cake(2,"Tiramisu","Preparazione",'02.jpg');
    CakeColl.Add(cake);
  
    CakeColl.save();
    


    this.state = {
       cakes :  [],
       totalCount: 0
    }


    
  }
  searchMovies = (term = '') =>{
     if(term.length< 3){
       return
     }
     fetchMovies(term).then(res => {
      this.setState({
        cakes : res.Search,
        totalCount : res.totalResults
      })
    })

  }
  componentDidMount(){
    this.searchMovies('back to the future')
   


  }
  render() {
    return (
      <React.Fragment>
      <NavBar onSearchTerm = {this.searchMovies} />
      <div className="container">
       <h1>My favorite cakes </h1>
       <CakeList cakes={ (this.state as any).cakes } />
      </div>
      </React.Fragment>
    );
  }
}

export default App;

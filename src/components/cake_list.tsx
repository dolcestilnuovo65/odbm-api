import React from 'react';
import MovieItem from './cake_item'

export default function cakeList({cakes}) {
   if(!cakes){
       return null;
   }
    return (
    <div className="row">
    {
        cakes.map(cake => <MovieItem  key={cake.imdbID} cake={cake}/>)
    }
    </div>)
}
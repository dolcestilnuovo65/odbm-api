import React from 'react';
import CakeItem from './cake_item'

export default function cakeList({cakes}) {
   if(!cakes){
       return null;
   }
    return (
    <div className="row">
    {
        cakes.map(cake => <CakeItem  key={cake.id} cake={cake}/>)
    }
    </div>)
}
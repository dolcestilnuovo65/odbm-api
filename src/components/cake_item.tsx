import React from 'react';
import { Button } from 'react-bootstrap';
import { PHOTOPATH }  from '../Global'

export default function cakeItem({cake}) {
    return (
       
        <div className="card col-md-3">
             <img className="card-img-top" src={PHOTOPATH + '/' + cake.Poster} alt={cake.Title} />
             <div className="card-body">
                <h5 className="card-title">{cake.Title}</h5>
                <h6 className="card-title">Prezzo: {cake.price}</h6>
                <h6 className="card-title">Disponibilità: {cake.num}</h6>
                <Button  className="btn btn-primary">Ingedienti</Button>
            </div>
        </div>
        
           
    )
        
        
}
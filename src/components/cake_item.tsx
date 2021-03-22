import React from 'react';
import { Button } from 'react-bootstrap';

export default function cakeItem({cake}) {
    return (
       
        <div className="card col-md-3">
             <img className="card-img-top" src={cake.Poster} alt={cake.Title} />
             <div className="card-body">
                <h5 className="card-title">{cake.Title}</h5>
                <Button  className="btn btn-primary">Ingedienti</Button>
            </div>
        </div>
        
           
    )
        
        
}
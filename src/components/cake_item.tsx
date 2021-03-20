import React from 'react';

export default function cakeItem({cake}) {
    return (
       
        <div className="card col-md-3">
             <img className="card-img-top" src={cake.Poster} alt={cake.Title} />
             <div className="card-body">
                <h5 className="card-title">{cake.Title}</h5>
                <button  className="btn btn-primary">VIEW DETAIL</button>
            </div>
        </div>
        
           
    )
        
        
}
import React from 'react'

export default function Product({produit}) {
  return (
    <tr>
        <td>{produit.id}</td>
        <td>{produit.title}</td>
        <td>${produit.price}</td>
        <td>{produit.description.slice(0,100)}...</td>
        <td>{produit.category}</td>
        <td> 
          <img
            src={produit.image}
            className="img-fluid"
            alt={produit.title}
            />
        </td>
        <td>
          <label >{produit.rating.rate}/5</label>
          <label >({produit.rating.count})</label>
        </td>
        
        
        
    </tr>
  )
  
}

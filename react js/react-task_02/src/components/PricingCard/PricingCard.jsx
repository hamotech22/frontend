import React from 'react'
import "./PricingCard.css"
export default function PricingCard(props) {





  return (
    <div className='PricingCard '>
    <div className="card">
  <h3>{props.title}</h3>
  <div className="price pb-2 text-warning"><span>${props.price}</span> <span>/month</span></div>
  <p>{props.description}</p>
  <div className="btn text-start">
    <button className="btn btn-primary">buy now</button>
  </div>
  <div className="info">

      <p><i className="bi bi-check" style={{ color: "black" }}></i> {props.info1}</p>
      <p><i className="bi bi-check" style={{ color: "black" }}></i> {props.info2}</p>
      <p><i className="bi bi-check" style={{ color: "black" }}></i> {props.info3}</p>
      <p><i className="bi bi-check" style={{ color: "black" }}></i> {props.info4}</p>
      <p><i className="bi bi-check" style={{ color: "black" }}></i> {props.info5}</p>
  
     
  
  </div>
</div>

   
    </div>
    
  )
}

import React from 'react'
import "./Pricing.css"
import PricingCard from '../PricingCard/PricingCard';



export default function Pricing() {

  const cards = [
    {
      title: "starter",
      price: "2.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      info1:" adipisicing",
      info2:" sit amet consectetur ",
      info3:" sit consectetur adipisicing",
      info4:" sit  adipisicing",
      info5:" consectetur adipisicing"
  },
    {
      title: "pro",
      price: "4.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
       info1:" adipisicing",
      info2:" sit amet consectetur ",
      info3:" sit consectetur adipisicing",
      info4:" sit  adipisicing",
      info5:" consectetur adipisicing"
  },
    {
      title: "max",
      price: "6.99",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
       info1:" adipisicing",
      info2:" sit amet consectetur ",
      info3:" sit consectetur adipisicing",
      info4:" sit  adipisicing",
      info5:" consectetur adipisicing"
  }

]


  return (
    <div className='pricing'>
           <h1 className='hero h1 text-center text-light' style={{ backgroundColor: "#1c2331" }}>Pricing</h1>
          <div className="title-card text-center">
            <h3 className='pt-5 text-bold'>chose the right hosting plan for you</h3>
            <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi repellendus atque incidunt harum!</p>
          </div>
  <div className="container">
   <div className="cards row">
  {cards.map((card, index)=> {
    return(
      <div key={index} className="col-12 col-md-6 col-xl-4">
        <PricingCard
        title={card.title}
        price={card.price}
        description={card.description}
       info1={card.info1}
       info2={card.info2}
       info3={card.info3}
       info4={card.info4}
       info5={card.info5}
      />
      </div>
    )}
  
  
  )}
</div>
  </div>

    </div>
  );
}

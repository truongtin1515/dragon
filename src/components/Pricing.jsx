import React from 'react'

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/4.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/13.jpg",
      title: "HEAL_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/8.png",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
    <h1>ELITE EDGE FITNESS PLANS</h1>
    <div className="wrapper">
      {pricing.map((element) => {
        return (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
            </div>
          </div>
        );
      })}
    </div>
  </section>
  )
}

export default Pricing
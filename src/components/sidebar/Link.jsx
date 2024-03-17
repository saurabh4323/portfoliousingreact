import React from 'react';

const Link = () => {
  const items=[
    "Home",
     "Service",
     "Projets",
     "Contact"

  ]
  return (
    <div className="links">{items.map(item=>(
      <a href={`#${item}`} key={item}> <h3 className="mename">{item}</h3></a>
    ))}</div>
  );
};

export default Link;

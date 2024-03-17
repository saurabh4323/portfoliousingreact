import React from 'react';

const Togle = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}><img className="menu" src="menu.png" alt=""/> </button>
  );
};

export default Togle;

import React from 'react';




const Navbar = (props) => {
  return (
    <>
    
<header> 
    <span>Dashboard</span>
    <nav>
    <button>Add new item</button>
    <img src={props.profile} alt="image1" />
    </nav>
    </header>    
      
    </>
  );




}







export default Navbar;

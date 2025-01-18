import React from 'react';
import First from './FirstPage'
import profilepic from '../assets/profile.png'
import link from '../assets/link.png'
import { Link } from 'react-router-dom';
const Supplier = () => {
 
  











  return (
    <section className='inventory-section'>
    <div className='side-inventory'>
<First   
    image={profilepic}

/>
</div>
<div className="supply">
   <Link
   to='/supplier2'
   >
   
   
   <span>Supplier Details </span>
   </Link>


    <div className="heading1">
        <span>Name</span>
        <span>E-mail</span>
        <span>Phone</span>
        <span>Status</span>
        <span>Edit</span>
    </div>

<div className="details4">
    <span>xyz item</span>
    <span>12243</span>
    <span>Adequate</span>
    <span>9323</span>
    <img src={link} alt="" />
</div>
<div className="details5">
    <span>xyz item</span>
    <span>12243</span>
    <span>Low</span>
    <span>233</span>
    <img src={link} alt="" />
</div>

<div className="details6">
    <span>xyz item</span>
    <span>12243</span>
    <span>Adequate</span>
    <span>9233</span>
    <img src={link} alt="" />
</div>








</div>




</section>

  )}

export default Supplier;

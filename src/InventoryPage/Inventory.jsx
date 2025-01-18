import React, { useState } from 'react';
import  First from '../pages/FirstPage'
import Navbar from '../components/Navbar';
import  profilepic from  '../assets/profile.png'
import sttatic from '../assets/statics.png'
import rectangle1 from '../assets/rectangle1.png'
import recatngle2 from '../assets/rectangle2.png'
import rectangle3 from '../assets/rectangle3.png'
import rectangle4 from '../assets/rectangle4.png'
import Box from '../box'

const Inventory = () => {
  const [background,setBackground]=useState(false)
  const changedColor = (index=>{
    setBackground(index)
  })

  const track= Box
    const tracking= track.map(content=>{
    return(
      <div className='order-track'>
        <p>{content.number}</p>
        <span className='text'>{content.text}</span>

      </div>
    )
  })





  return (
    <section className='inventory-section'>
        <div className='side-inventory'>
    <First   
        image={profilepic}
    
    />
        </div>
      <div className="product-detials">
    <div className="statics">
      <h3> Product Details </h3>
      <div className="lowstock">
        <span>Low  on Stock</span>
        <span>3</span>
      </div>
      <div className="group">
        <span>All item group</span>
        <span>10</span>
      </div>
      <div className="item-group">
        <span>All items</span>
        <span>21</span>
      </div>
      <div className="photo">
      <img src={sttatic} alt="" />
    </div>

    </div>
   <div className="side-rectangle">
    <div className="blue">
    <img src={rectangle1} alt="" />
    <span>Overdue</span>
    </div>
    <div className="voilet">
    <img src={recatngle2} alt="" />
    <span>Soon to be overdue</span>
    </div>
    <div className="purple">
    <img src={rectangle3} alt="" />
    <span>Need Attention</span>
    </div>
    <div className="aqua">
    <img src={rectangle4} alt="" />
    <span>lorem ispum</span>
    </div>
   </div>
        </div>
    
    <div className="trackorder">
      {tracking}

      <div className="lastinv">
        <div className="anal">
        <h3>Item Details </h3>
        <p>Detailed analytics of you items</p>
        </div>
        <div className="all-content">
        <div className="holding">
          <span>Item</span>
          <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Sales</span>
          <span>&nbsp; &nbsp; &nbsp; &nbsp;Cost</span>
          <span>&nbsp; &nbsp; &nbsp; &nbsp;Revenue</span>
          <span>Inventory</span>
          </div>

        <div   
         id={ background=== 0 ? "change2" : null} 
         onClick={() => changedColor(0)}
        
        
        className="content1">
          <span>xyz item</span>
          <span >12243</span>
          <span >$100</span>
          <span>$3290</span>
          <span>130</span>

        </div>
        <div className="content1">
          <span>xyz item</span>
          <span >12243</span>
          <span >$100</span>
          <span>$3290</span>
          <span>130</span>

        </div>
        <div className="content1">
          <span>xyz item</span>
          <span >12243</span>
          <span >$100</span>
          <span>$3290</span>
          <span>130</span>

        </div>
        </div>
      </div>
      </div>
    

      

    </section>
  );
}

export default Inventory;

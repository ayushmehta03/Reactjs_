import React from 'react';
import { Link,useLocation} from 'react-router-dom';
import line from '../assets/line.png'
import rectangle34 from '../assets/rectangle34.png'
import rectangle35 from '../assets/rectangle35.png'
import rectangle36 from '../assets/rectangle36.png'
import rectangle37 from '../assets/rectangle37.png'
import rectangle38 from '../assets/rectangle38.png'
import rectangle39 from '../assets/rectangle39.png'


const Supplier3 = () => {
    const location = useLocation();


    const isActive = (path) => location.pathname === path;


  return (
    <section className="side"  id='side-main' >
    <div className="content"  id='side-fi'>
      <h2>BizSync</h2>
      
      

  <Link
    to="/recivables"
    id={isActive('/recivables') ? 'change1' : null}
    className="second"
  >
    Receivables
  </Link>

  <Link
    to="/spends"
    id={isActive('/spends') ? 'change1' : null}
    className="third"
  >
    Spends
  </Link>

  

 

<Link 
to="/supplier3" 
        id={isActive('/supplier3') ? 'change1' : null}
    className='eight'
    
        >
            Supplier
</Link >
    
    </div>
    <div className="reports1">
        <p>Sales Orders</p>
        <div className="details7">
            <p>Order Number</p>
            <p>Date</p>
            <p>   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;      Customer</p>
            <p>Total Amount</p>
            <p>Status</p>
        </div>
        <div className="fill-det">
            <p>S0-12</p>
            <p>2024-01-01</p>
            <p>Ayush </p>
            <p>$40</p>
            <p>Pending</p>
        </div>
    </div>
    <div className="reports2">
        <p>
        Customer Details
        </p>
        <div className="para">
            <p>Name:Ayush</p>
            <p>Adress:Ayush@gmail.com</p>
            <p>Phone:1492113</p>
            <p>Address:123,am street</p>
        </div>
    </div>
    <div className="layout">
        <p>Process Return</p>
        <div className="on" >
    <div className="ordernumber">
    <p>Order number</p>
    </div>
    <div className="reason">
    <p>Reason</p>
    </div>
        </div>
       <div className="white">
        <p>Process</p>
       </div>
    </div>
    <div className="main-graph">
       <p> Sales Trends </p>
        <div className="graph-contain">
    <img src={line} alt="" />
    <img src={rectangle34} alt="" />
    <img src={rectangle35} alt="" />
    <img src={rectangle36} alt="" />
    <img src={rectangle37} alt="" />
    <img src={rectangle38} alt="" />
    <img src={rectangle39} alt="" />
    </div>
    </div>
    </section>
  );
}

export default Supplier3;

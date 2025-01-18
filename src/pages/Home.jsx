
import profile from '../assets/profile.png';
import data2 from '../assets/data2.png'
import graph3 from '../assets/graph3.png'
import group3 from '../assets/group3.png'
import rectangle1 from '../assets/rectangle1.png'
import recatngle2 from '../assets/rectangle2.png'
import rectangle3 from '../assets/rectangle3.png'
import rectangle4 from '../assets/rectangle4.png'
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();


  const isActive = (path) => location.pathname === path;


  return (
    <section className="side-inventory">
      <section className="side">
        <div className="content">
          <h2>BizSync</h2>
  


          <Link
            to="/"
            id={isActive('/') ? 'change1' : null}
            className="first"
          >
            Home
          </Link>

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
            to="/inventory"
            id={isActive('/inventory') ? 'change1' : null}
            className="fourth"
          >
            Inventory
          </Link>

          <Link
            to="/notification"
            id={isActive('/notification') ? 'change1' : null}
            className="fifth"
          >
            Notification
          </Link>

          <Link
            to="/supplier"
            id={isActive('/supplier') ? 'change1' : null}
            className="sixth"
          >
            Supplier
          </Link>
      






            <header  >
              
              <nav  className='left-n'>
                <button>Add new item</button>
                <img src={profile} alt="User profile" />
              </nav>
            </header>
          </div>
        </section>
        <div className="image-3">
            <img src={data2} alt="" />
        </div>
        <div className="second-main">
            <div className="graph-2">
                <span>Spends & Earnings</span>
                <img  src={graph3} alt="" /> 
            </div>
        </div>
        <div className="add-width">
          <button className='btn4'>Add widget</button>
        </div>
    <div className="spends">
      <span className='expense'>
        Expenses

        
      </span>
      <img className='group-3' src={group3} alt="" />
       <div className="side-rectangle   group3">
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
         <div className="max-div">
         <div className="black-box">
    <button className="class3">Add widget</button>
         </div>
         </div>
    </div>
        
        
        </section>
        
)}

export default Home;

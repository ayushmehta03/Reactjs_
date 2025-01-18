import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import profile from '../../assets/profile.png';

const Notification = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <section className="inventory-section">
      <div className="side-inventory">
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

    

            <header className='head'>
              <span >Notifications</span>
              <nav className='btn'>
                <button>Add new item</button>
                <img src={profile} alt="User profile" />
              </nav>
            </header>
          </div>
        </section>
        <div className="message">
          
            <p>You have no notifications</p>
            <span>You can start receiving critical notification as you set one up</span>
        <button className="add">Add Notification</button>
        </div>
      </div>
    </section>
  );
};

export default Notification;

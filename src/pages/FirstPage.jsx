import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';



const Side = (props) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;


  return (
    <>
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

        
        </div>
      </section>
      
      <Navbar
      
      profile={props.image} />
    </>
  );
};

export default Side;

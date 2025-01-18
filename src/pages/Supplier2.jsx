import React from 'react';
import { Link,useLocation} from 'react-router-dom';
import pyro from '../assets/pyro.png'
const Supplier2 = () => {



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
to="/supplier2" 
        id={isActive('/supplier2') ? 'change1' : null}
    className='seventh'
    
        >
            Supplier
</Link >
    
    </div>
    <div className="reports">
      <span>Financial Reports</span>
      </div>
    
    <div className="three">
      <div className="date">
        <span>dd/mm/yy</span>
      </div>
      <div className="date">
      <span>dd/mm/yy</span>
      </div>
      <div className="date">
    <span>Categories</span>
      </div>
    
    </div>
    <div className="generate">
      <span>Generate</span>
    </div>
    <div className="reports">
      <span>Staff Performance Reports</span>
      </div>
    
    <div className="three">
      <div className="date">
        <span>dd/mm/yy</span>
      </div>
      <div className="date">
      <span>dd/mm/yy</span>
      </div>
      <div className="date">
    <span>Categories</span>
      </div>
    
    </div>
    <div className="generate">
      <span>Generate</span>
    </div>
    <div className="reports">
      <div className="long">
        <span>Low stock items</span>
      </div>
    </div>
    <div className="generate  bott">
    <Link 
    className='link2'
    to='/supplier3'
    > 
     <span>Generate</span>
    </Link>


    </div>


<div className="image-container">
<img src={pyro} alt="" />
</div>






  </section>
  );
}

export default Supplier2;

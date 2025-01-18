import React from 'react';
import  Side from './pages/FirstPage';
import graph from './assets/group2.png'
import profile from './assets/profile.png'
import rectangle1 from './assets/rectangle1.png'
import Middle from './Middle';
import recatngle2 from './assets/rectangle2.png'
import rectangle3 from './assets/rectangle3.png'
import rectangle4 from './assets/rectangle4.png'
import data from './assets/data.png'
import final from './assets/final.png'
import Bottom from './components/Bottom';
import './index.css'
import Inventory from './InventoryPage/Inventory';
import Notifcation from './components/Notification/Notifcation';
import Supplier from './pages/Supplier';
const bacon ={
  title:"Dashboard"
}


const App = () => {
  return (
  
    <>
    <div className='main'>
    <Side
    image={profile}
    content={bacon.title}

    />
      <Middle
          look={graph}
          blue={rectangle1}
          voilet={recatngle2}
          purple={rectangle3}
          aqua={rectangle4}
          cooldata={data}
      
      />
          

    </div>
    <Bottom
                      bottom={final}

            />
    
  

    </>
  
  );
}

export default App;

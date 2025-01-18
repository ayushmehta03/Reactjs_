
import React from 'react';  
import { createRoot } from 'react-dom/client'; 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';  
import App from './App.jsx';  
import Inventory from './InventoryPage/Inventory.jsx';
import Notifcation from './components/Notification/Notifcation.jsx';
import Home from './pages/Home.jsx';
import Supplier from './pages/Supplier.jsx';
import Supplier2 from './pages/Supplier2.jsx';
import Supplier3 from './pages/Supplier3.jsx';
const router = createBrowserRouter([

  {
    path:'/',
    element: <Home />
  },
  
  {
    path: '/recivables',
    element: <App />

  },
  {
    path:'/spends',
    element: <App />
  },
  {
    path:'/inventory',
    element: <Inventory />
  },
  {
    path:'/notification',
    element: <Notifcation />
  },
  {
    path:'/supplier',
    element: <Supplier />
  },
  {
    path:'/supplier2',
    element: <Supplier2 />
  },
 { path:'/supplier3',
  element:<Supplier3 />
 }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);

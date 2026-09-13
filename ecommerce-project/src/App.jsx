import { OrdersPage } from './pages/OrdersPage'
import {HomePage} from './pages/HomePage'
import {PageNotFound} from './pages/PageNotFound'
import{useState,useEffect} from 'react';
import axios from 'axios';
import {TrackingPage} from './pages/TrackingPage'
import {Routes,Route} from 'react-router'
import {CheckoutPage} from './pages/checkout/CheckoutPage'
import './App.css'

function App() {

    const [cart,setCart]=useState([])
    useEffect()(()=>{
     axios.get('/api/cart-items')
       .then((response)=>{
          setCart (response.data)
       });

    },[])
      

  

  return (
    
    <Routes>
      <Route  index  element ={<HomePage cart={cart}/>}/>
     
      <Route  path ="checkout"  element ={<CheckoutPage cart={cart}/>}/>
       <Route  path ="orders"  element ={<OrdersPage/>}/>
        <Route  path ="tracking"  element ={<TrackingPage/>}/>
        <Route path ="*" element={<PageNotFound/>}/>
   </Routes>
  
  )
}

export default App

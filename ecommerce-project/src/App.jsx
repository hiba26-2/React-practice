import { OrdersPage } from './pages/OrdersPage'
import {HomePage} from './pages/HomePage'
import {PageNotFound} from './pages/PageNotFound'
import {TrackingPage} from './pages/TrackingPage'
import {Routes,Route} from 'react-router'
import {CheckoutPage} from './pages/checkout/CheckoutPage'
import './App.css'

function App() {


  return (
    
    <Routes>
      <Route  index  element ={<HomePage/>}/>
     
      <Route  path ="checkout"  element ={<CheckoutPage/>}/>
       <Route  path ="orders"  element ={<OrdersPage/>}/>
        <Route  path ="tracking"  element ={<TrackingPage/>}/>
        <Route path ="*" element={<PageNotFound/>}/>
   </Routes>
  
  )
}

export default App

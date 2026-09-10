import { OrdersPage } from './pages/OrdersPage'
import {HomePage} from './pages/HomePage'
import {Routes,Route} from 'react-router'
import {CheckoutPage} from './pages/CheckoutPage'
import './App.css'

function App() {


  return (
    
    <Routes>
      <Route  index  element ={<HomePage/>}/>
     
      <Route  path ="checkout"  element ={<CheckoutPage/>}/>
       <Route  path ="orders"  element ={<OrdersPage/>}/>
        <Route  path ="tracking"  element ={<CheckoutPage/>}/>
   </Routes>
  
  )
}

export default App

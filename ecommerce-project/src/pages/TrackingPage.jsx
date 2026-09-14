import {Header} from '../components/Header'
import {Link,useParams} from 'react-router'
import  axios from 'axios';
import {useEffect,useState} from 'react'
import './Trackingpage.css'
import dayjs from 'dayjs';

export function TrackingPage({cart}){
 const [order,setOrder]=useState(null)
const {orderId,productId}=useParams();
useEffect(()=>{
const getTrackingData= async()=>{
  let response= await axios.get(`/api/orders/${orderId}?expand=products`)
setOrder(response.data)
}
getTrackingData();
},[orderId])
if(!order){
  return null;
}
const orderProduct=order.products.find((orderProduct)=>{
  return orderProduct.product.id===productId
})
const totalDeliveryTimesMs=orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
const deliveryPercent = Math.min(
  (timePassedMs / totalDeliveryTimesMs) * 100,100);
    return(
        <>
          <title>Tracking</title>
          <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
 <Header cart={cart} />

    <div className="tracking-page">
      <div className="order-tracking">
        <Link to="/orders" className="back-to-orders-link link-primary" >
          View all orders
        </Link>

        <div className="delivery-date">
         {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
        </div>

        <div className="product-info">
           {orderProduct.product.name}

        <div className="product-info">
          Quantity:  {orderProduct.quantity}
        </div>

        <img className="product-image" src={orderProduct.product.image} />

        <div className="progress-labels-container">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${deliveryPercent}%` }}></div>
        </div>
      </div>
    </div>
    </div>
        </>
    )
}

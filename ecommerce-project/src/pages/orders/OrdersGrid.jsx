import{OrderHeader} from "./OrderHeader";
import{OrderDetailsGrid} from "./OrderDetailsGrid";

export function OrdersGrid({orders}){
    return(

            <div className="orders-grid">
        {orders.map((order)=>{
          return(
    <div key={order.id} className="order-container">

        <OrderHeader order={order} />

         <OrderDetailsGrid order={order}/>
        </div>
          )

        })}

          <div className="order-header">
            <div className="order-header-left-section">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>June 10</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>$41.90</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
            </div>
          </div>

          
       
      </div>
    )
}
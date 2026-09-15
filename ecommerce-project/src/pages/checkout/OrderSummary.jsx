import { DeliveryDate } from "./DeliveryDate";
 import { DeliveryOptions } from "./DeliveyOptions";
import { CartItemDetails } from "./cartItemDetails";
 export function OrderSummary({cart,deliveryOptions,loadCart}){
   return(
         <div className="order-summary">

          {deliveryOptions.length >0 && cart.map((cartItem)=>{
            const selectedDeliveryOption= deliveryOptions.find((deliveryOption)=>{
               return deliveryOption.id===cartItem.deliveryOptionId;
            });

              return(
                
          <div key={cartItem.productId} className="cart-item-container">
            <DeliveryDate selectedDeliveryOption={selectedDeliveryOption}/>

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />
             <DeliveryOptions loadCart={loadCart} deliveryOptions={deliveryOptions} cartItem={cartItem} />
            </div>
          </div>
         
              )
          })}
     
        </div>
)
 }
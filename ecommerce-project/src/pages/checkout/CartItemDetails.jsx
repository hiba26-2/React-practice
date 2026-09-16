import { formatMoney } from "../../utils/money"
import axios from "axios"
import {useState } from 'react'
export function CartItemDetails({cartItem,loadCart}){
  const deleteCartItem=async()=>{

   await axios.delete(`api/cart-items/${cartItem.productId}`)
    await loadCart();

  }
  const [quantity, setQuantity] = useState(cartItem.quantity)
const[update,setupdate]=useState(false)
   return(
    <>
            <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  {formatMoney(cartItem.product.pricecent)}
                </div>
                <div className="product-quantity">
                    {update ? (
                      <input type='text' className="quantity-textbox" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                       ) : (
                     <span> Quantity:{quantity} <span className="quantity-label"></span>
                     </span>
)}
                  
                  <span className="update-quantity-link link-primary"
                  
                   onClick={() => {
                      setupdate(!update)
                  }}
                  >
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary"
                  onClick={deleteCartItem}
                  >
                    Delete
                  </span>
                </div>
              </div>
              </>
)
}
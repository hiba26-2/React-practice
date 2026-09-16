import { formatMoney } from "../../utils/money"
import axios from "axios"
import {useState } from 'react'
export function CartItemDetails({cartItem,loadCart}){
  const deleteCartItem=async()=>{

   await axios.delete(`api/cart-items/${cartItem.productId}`)
    await loadCart();

  }
  const [quantity, setQuantity] = useState(cartItem.quantity)
  const[isUpdating,setisUpdating]=useState(false)
 const update = async () => {
   
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setisUpdating(false);
    } else {
      setisUpdating(true);
    }
  }
   const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;


    if (keyPressed === 'Enter') {
      update();

    } else if (keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setisUpdating(false);
    }
  };
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
                    {isUpdating ? (
                    <input
                    type='text' 
                    className="quantity-textbox" 
                    value={quantity} onChange={(event) => setQuantity(event.target.value)} 
                    onKeyDown={handleQuantityKeyDown}
                    />
                       ) : (
                     <span> Quantity:{quantity} <span className="quantity-label"></span>
                        </span>
                      )}
                  
                  <span className="update-quantity-link link-primary"
                  
                   onClick={update}
                 
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
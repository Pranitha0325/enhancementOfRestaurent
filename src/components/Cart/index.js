import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllItems, deleteCartItem} = value

      const removeItems = () => {
        removeAllItems()
      }

      const removeItem = id => {
        deleteCartItem(id)
      }

      return (
        <div>
          <div className="header">
            <Link to="/">
              <h1>UNI Resto Cafe</h1>
            </Link>
            <p>My Orders</p>
            <Link to="/cart">
              <AiOutlineShoppingCart className="cart_logo" />
            </Link>
            <p>{cartList.length}</p>
          </div>
          {cartList.length === 0 ? (
            <div>
              <img
                src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg?w=740"
                alt="empty cart"
              />
            </div>
          ) : (
            <div>
              <button type="button" onClick={removeItems}>
                Remove All
              </button>
              <ul className="cart-list">
                {cartList.map(item => (
                  <li className="cart-item" key={item.dish_id}>
                    <img
                      className="image"
                      src={item.dish_image}
                      alt={item.dish_id}
                    />
                    <p>{item.dish_name}</p>
                    <div className="item-quantity">
                      <button type="button">+</button>
                      <p>{item.count}</p>
                      <button type="button">-</button>
                    </div>
                    <p>{item.dish_price*item.count}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.dish_id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart

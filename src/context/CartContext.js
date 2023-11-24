import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addItemToCart: () => {},
  removeAllItems: () => {},
  deleteCartItem: () => {},
})

export default CartContext

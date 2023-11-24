import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Login from './components/Login'
import CartContext from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css'

// write your code here
class App extends Component {
  state = {cartList: []}

  addItem = details => {
    this.setState(prevState => ({cartList: [...prevState.cartList, details]}))
  }
  emptyList = () => {
    this.setState({cartList: []})
  }

  removeItem = id => {
    const {cartList} = this.state
    const remaining = cartList.filter(each => each.dish_id !== id)
    this.setState({cartList: remaining})
  }
  render() {
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addItemToCart: this.addItem,
          removeAllItems: this.emptyList,
          deleteCartItem: this.removeItem,
        }}
      >
        <BrowserRouter>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </BrowserRouter>
      </CartContext.Provider>
    )
  }
}

export default App

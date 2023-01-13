import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import Contacts from './Contacts'
import Cart from './Cart'
import { useState } from "react";
import productList from './products'

function App() {
  let [products, _setProducts] = useState(productList);
  let [cart, setCart] = useState([]);

  function putInCart(id) {
    if (isAlreadyInCart(id)) {
      incrementCountBy(1, id); return;
    } else {
      let updatedCart = [...cart]
      let selection = getProduct(id);
      updatedCart.push({ product: selection, amount: 1 });
      console.log(updatedCart);
      setCart(updatedCart);
    }
  }

  function removeFromCart(id){
    let indexToRemove = cart.findIndex(item=>item.product.id===id)
    if (indexToRemove === -1) {console.log("No such item in cart"); return;}

    let updatedCart = [...cart]

    updatedCart.splice(indexToRemove, 1);
    setCart(updatedCart);
  }

  function incrementCountBy(amount, id) {
    let updatedCart = [...cart]
    let item = getCartItem(id);
    if (item && (item.amount + amount) > 0) {
      item.amount += amount;
      setCart(updatedCart);
    } else {
      console.log("No such item exists")
    }
  }

  function isAlreadyInCart(id){
    return getCartItem(id) !== undefined
  }

  function getProduct(id) {
    return productList.find(product=>product.id===id);
  }

  function getCartItem(id) {
    return cart.find(item=>item.product.id===id);
  }

  return (
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop products={products} putInCart={putInCart}/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/cart" element={<Cart cart={cart} remove={removeFromCart} incrementBy={incrementCountBy}/>}/>
      </Routes>
    </BrowserRouter>  );
}

export default App;

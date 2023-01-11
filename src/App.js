import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import Contacts from './Contacts'
import Cart from './Cart'

function App() {
  return (
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>  );
}

export default App;

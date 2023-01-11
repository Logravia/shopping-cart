import { Link } from "react-router-dom";


function Navbar({itemCount}) {
 return (
   <nav>
     <Link to='/'><li>Home</li></Link>
     <Link to='/shop'><li>Shop</li></Link>
     <Link to='/contacts'><li>Contacts</li></Link>
     <Link to='/cart'><li>Cart {itemCount}</li></Link>
   </nav>
 )
}

export default Navbar

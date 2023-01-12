import CartItem from './CartItem'

function Cart({ cart, remove, incrementBy }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map(item=>
        <CartItem key={item.id} product={item.product} amount={item.amount} remove={remove} incrementBy={incrementBy} />
      )}
    </div>
  )
}
export default Cart

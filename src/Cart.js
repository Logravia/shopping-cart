import CartItem from './CartItem'

function Cart({ cart, remove, incrementBy }) {

  function total () {
    return cart.reduce((acc,item)=>{
      return acc + (item.product.price * item.amount)
    }, 0)
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.map(item=>
        <CartItem key={item.id} product={item.product} amount={item.amount} remove={remove} incrementBy={incrementBy} />
      )}

      <div className="total">
        <p>Total to pay: {total()}</p>
      </div>
    </div>
  )
}
export default Cart

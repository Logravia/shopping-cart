function CartItem({product, amount, remove, incrementBy}) {

  return (
   <div className="cartItem">
     <img alt="" src={product.img} />
     <p className="name">Name: {product.name}</p>
     <p className="price">Cost: {product.price * amount}</p>

     <button onClick={()=>remove(product.id)}>Remove</button>
     <button onClick={()=>incrementBy(1, product.id)}>+</button>
     <button onClick={()=>incrementBy(-1, product.id)}>-</button>
   </div>
  )
}

export default CartItem;

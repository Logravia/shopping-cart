import ProductBox from './ProductBox'

function Shop({products, putInCart}) {
 return (
   <div className="shop">
   {products.map(prod =>
     <ProductBox data={prod} add={putInCart}/>
   )}
   </div>
 )
}
export default Shop

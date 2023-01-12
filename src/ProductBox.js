function ProductBox({data, add}) {
 return (
   <div className="productBox">
     <img alt="" src={data.img} />
     <p className="name">Name: {data.name}</p>
     <p className="price">Price: {data.price}</p>
     <button onClick={()=>add(data.id)}>Add</button>
   </div>
 )
}

export default ProductBox

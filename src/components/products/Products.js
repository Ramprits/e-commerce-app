import React from "react"
import Product from "./Product"
const Products = ({ products }) => {
  return (
    <Product>
      {products.map(item => (
        <div>
          <p>{item.node.title}</p>
        </div>
      ))}
    </Product>
  )
}

export default Products

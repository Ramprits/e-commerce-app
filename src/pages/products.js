import React from "react"
import ProductsPage from "../components/products/Products"
import { graphql } from "gatsby"
const Products = ({ data }) => {
  return (
    <>
      <ProductsPage products={data.products.edges}></ProductsPage>
    </>
  )
}

export const getProducts = graphql`
  query {
    products: allStrapiProducts {
      totalCount
      edges {
        node {
          productId: id
          title: name
          description: des
          price
        }
      }
    }
  }
`
export default Products

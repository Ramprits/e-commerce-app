import React from "react"
import Layout from "../components/layout"
import ProductsPage from "../components/products/Products"
import { graphql } from "gatsby"
const Products = ({ data }) => {
  return (
    <Layout>
      <ProductsPage products={data.products.edges}></ProductsPage>
    </Layout>
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

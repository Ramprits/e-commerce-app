import React from "react"
import { Link } from "gatsby"
import { elastic as Menu } from "react-burger-menu"

export default props => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/products">
        Products
      </Link>

      <Link className="menu-item" to="/pizzas">
        Pizzas
      </Link>

      <Link className="menu-item" to="/desserts">
        Desserts
      </Link>
    </Menu>
  )
}

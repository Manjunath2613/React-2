import React, { Component } from "react";

class Product extends Component {
  render() {
    const { id, name, quantity, price } = this.props.product;

    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default Product;

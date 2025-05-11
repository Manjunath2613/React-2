import React, { Component } from "react";
import Product from "./Product";

class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "0 auto",
          marginTop: "20px",
          borderCollapse: "collapse",
          width: "70%"
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsList;

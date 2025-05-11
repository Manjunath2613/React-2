import React, { Component } from "react";
import ProductsList from "./ProductsList";

class AllProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Laptop", quantity: 10, price: 1200 },
        { id: 2, name: "Phone", quantity: 25, price: 800 },
        { id: 3, name: "Keyboard", quantity: 50, price: 30 },
        { id: 4, name: "Mouse", quantity: 45, price: 20 }
      ]
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Product List</h1>
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default AllProductsPage;

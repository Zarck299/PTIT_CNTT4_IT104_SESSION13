import { Component } from "react";
import Children_Comp from "./Bai5_Children_Comp";

interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface State {
  product: Product;
}

export default class Parent_Comp extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Bưởi ba roi",
        price: "12.000 ₫",
        quantity: 6,
      },
    };
  }

  render() {
    return (
      <div>
        <h2>Component Cha</h2>
        <Children_Comp product={this.state.product} />
      </div>
    );
  }
}

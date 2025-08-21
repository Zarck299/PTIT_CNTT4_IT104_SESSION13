import { Component } from "react"

type Product = {
    id: number,
    name: string,
    price: string,
    quantity: number,
}
type Props ={
    product: Product,
}
export default class Children extends Component<Props> {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id: {product.id}</p>
        <p>Product name: {product.name}</p>
        <p>Price: {product.price.toLocaleString()} đ</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  }
}

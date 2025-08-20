type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number,
}
type Props ={
    product: Product,
}
export default function Children({product}: Props) {
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

import React, { useState } from "react";
import Children_Comp from "./Bai5_Children_Comp";

const Parent_Comp: React.FC = () => {
  const [product] = useState({
    id: 1,
    name: "Bưởi ba roi",
    price: "12.000 ₫",
    quantity: 6,
  });

  return (
    <div>
      <h2>Component Cha</h2>
      <Children_Comp product={product} />
    </div>
  );
};

export default Parent_Comp;

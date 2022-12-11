import {useContext} from "react";
import Context from "../context/context";

export function useTotalPrice () {
  const { cartItems } = useContext(Context);
  return cartItems.reduce((total, item) => {
    total += item.price;
    return total;
  },0);
}

export default useTotalPrice;
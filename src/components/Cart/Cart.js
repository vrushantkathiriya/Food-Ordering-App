import { useContext , useState } from "react";
import Model from "../UI/Model";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const [showOrder, setShowOrder] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
      };

      const orderHanlder = () => {
        cartCtx.clearall();
        setShowOrder(true);
      };
    
      const cartItem = (
        <ul className={classes["cart-items"]}>
            {
                cartCtx.items.map((item) => (
                    <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                     />
                ))
            };
        </ul>
      )

  return (
    <Model></Model>
  )
}

export default Cart
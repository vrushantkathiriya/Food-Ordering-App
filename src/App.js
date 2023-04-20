
import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartIsShow, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
      };
    
      const hideCartHandler = () => {
        setCartIsShown(false);
      };

    return ( 
        <CartProvider>
             {cartIsShow && <Cart onClose={hideCartHandler} />}
            <Header />

            <main>
                <Meals />
            </main>
        </CartProvider>
      
     );
}

export default App;
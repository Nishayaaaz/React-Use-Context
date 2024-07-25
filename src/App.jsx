import './App.css'
import { CartProvider } from './CartContext';
import {Cart} from "./Components/Cart"

function App() {
  return (
    <>
      <div className="parentdiv">
        <div className="container p-4 container-wrapper">
          <h1 className="Great-Vibes-font">React useContext Task</h1>
          <CartProvider>
            <Cart />
          </CartProvider>
        </div>
      </div>
    </>
  );
}

export default App
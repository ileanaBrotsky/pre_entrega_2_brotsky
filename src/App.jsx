import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer"
import {Checkout} from "./components/pages/checkout/Checkout";
import Error_404 from "./components/pages/error_404/Error_404";
import CartContextProvider from "./context/CartContex";
function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="*" element={<Error_404/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

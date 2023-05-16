import Navbar from "./components/navbar/Navbar";
import Auth from "./routes/auth/Auth";
import Login from "./routes/auth/login/Login";
import Register from "./routes/auth/register/Register";
import Home from "./routes/home/Home";
import {Routes, Route} from "react-router-dom"
import Product from "./routes/product/Product";
import SingleProduct from "./routes/single-product/SingleProduct";
import Cart from "./routes/cart/Cart";
import Watchlist from "./routes/watchlist/Watchlist";

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="auth" element={<Auth/>}>
          <Route path="/auth/login" element={<Login/>}></Route>
          <Route path="/auth/register" element={<Register/>}></Route>
        </Route>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/product/:id/single" element={<SingleProduct/>}/>
      </Routes>
    </>
  );
}

export default App;

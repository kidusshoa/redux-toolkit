import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Product from "./components/product";
import RootLayout from "./components/rootLayout";
import Dashboard from "./components/dashboard";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/product";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

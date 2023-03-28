import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCreate from "./pages/Products/ProductCreate";
import ProductList from "./pages/Products/ProductList";
import ProductEdit from "./pages/Products/ProductEdit";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<ProductList />}></Route>
        <Route path="/" exact element={<ProductList />}></Route>
        <Route path="/product/new" element={<ProductCreate />}></Route>
        <Route path="/product//product:id" element={<ProductEdit />}></Route>
      </Routes>
    </>
  );
}

export default App;

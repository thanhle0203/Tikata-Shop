import React from "react";
import {
  BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products:category' element={<ProductList />} /> 
        <Route path='/product:/id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Special from "./pages/special/Special";
import Cart from "./pages/cart/Cart";
import Main from "./pages/main/Main";
import Desserts from "./pages/desserts/Desserts";
import Beverages from "./pages/beverages/Beverages";

function App () {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/special" />} />

          <Route path='/special' element={<Special />} />
          <Route path='/main' element={<Main />} />
          <Route path='/desserts' element={<Desserts />} />
          <Route path='/beverages' element={<Beverages />} />

          <Route path='/place-order' element={<Cart />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

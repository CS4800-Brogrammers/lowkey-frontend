import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import EditShop from "./pages/EditShop";
import Cart from "./pages/Cart";
import User from "./pages/User";
import LowkeyNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <LowkeyNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/User" element={<User />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

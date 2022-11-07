import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import EditShop from "./pages/EditShop";
import Cart from "./pages/Cart";
import User from "./pages/User";
import LowkeyNavbar from "./components/Navbar";
import Product from "./pages/Product";
import Error from "./components/Error";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <LowkeyNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

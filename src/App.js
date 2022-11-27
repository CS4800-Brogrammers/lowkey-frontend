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
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import { ServerHostnameProvider } from "./context/ServerHostnameContext";
import ShopView from "./pages/ShopView";
import CreateShop from "./pages/CreateShop";
import Browse from "./pages/Browse";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ServerHostnameProvider>
            <LowkeyNavbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<CreateShop />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/product/:id" element={<Product />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/search" element={<Browse/>}></Route>
              <Route path="*" element={<Error />}></Route>
              <Route path="/shopview/:id" element={<ShopView/>}></Route>
            </Routes>
          </ServerHostnameProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

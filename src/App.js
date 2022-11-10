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
import "bootstrap/dist/css/bootstrap.min.css";
import CreateShop from "./pages/CreateShop";
import Browse from "./pages/Browse";
import { ServerHostnameProvider } from "./context/ServerHostnameContext";

function App() {
  return (
    <div className="App">
      <Router>
        <ServerHostnameProvider>
          <LowkeyNavbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateShop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/search" element= {<Browse/>}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </ServerHostnameProvider>
      </Router>
    </div>
  );
}

export default App;

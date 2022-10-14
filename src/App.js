import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import LowkeyNavbar from "./components/Navbar";
import EditShop from "./pages/EditShop";

function App() {
  return (
    <div className="App">
      <LowkeyNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

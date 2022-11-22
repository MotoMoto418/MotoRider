import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Rent from "./components/Rent";
import Navibar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/rent" element={<Rent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

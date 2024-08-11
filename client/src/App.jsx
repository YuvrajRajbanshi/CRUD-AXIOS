import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Create from "./components/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;

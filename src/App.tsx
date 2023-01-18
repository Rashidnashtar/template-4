import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import Settings from "./components/settings";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="site-container">
        <div className="fake-nav"></div>
        <div className="content-container">
          <Heading />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

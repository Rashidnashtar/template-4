import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import Settings from "./components/settings";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Courses from "./components/courses";
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
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Courses" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="site-container">
        <div className="fake-nav"></div>
        <div className="content-container">
          <Heading />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

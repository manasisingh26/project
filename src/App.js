import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Market from "./Components/Market/Market";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Market />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Home, AnzeigeDetails } from "./pages";

function App() {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col h-screen w-full">
        <div className="bg-white w-full ">
          <NavBar />
        </div>

        <div className="flex-1 p-4 bg-white">
          <Router>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/create-Ad" element={<h1>Anzeige erstellen</h1>} />
              <Route path="/Anzeige/:id" element={<AnzeigeDetails/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

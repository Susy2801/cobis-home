import "./App.css";
import { useEffect } from "react";
// Page
import HomePage from "./Website/Home Page/HomePage";
import RoomPage from "./Website/Room Page/RoomPage";
import Header from "./Website/Header/Header";
import Footer from "./Website/Footer/Footer";
import Explore from "./Website/Explore Page/Explore";

//Route
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

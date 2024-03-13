import "./App.css";
// Page
import HomePage from "./Website/Home Page/HomePage";
import RoomPage from "./Website/Room Page/RoomPage";
import Header from "./Website/Header/Header";
import Footer from "./Website/Footer/Footer";

//Route
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TVShows from "./components/TVShows";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/me" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from "./Pages/home/Home";
import { Person } from "@mui/icons-material";
import Profile from "./Pages/home/profile/Profile";
import Login from "./Pages/home/Login/Login";
import Register from "./Pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

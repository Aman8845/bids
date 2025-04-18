import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideDrawer from "./layout/SideDrawer";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { fetchLeaderboard, fetchUser } from "./store/slices/userSlice";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchLeaderboard());
  }, []);

  return (
    <Router>
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;

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
import { getAllAuctionItems } from "./store/slices/auctionSlice";
import Leaderboard from "./pages/Leaderboard";
import Auctions from "./pages/Auctions";
import AuctionItem from "./pages/AuctionItem";
import CreateAuction from "./pages/CreateAuction";
import ViewMyAuction from "./pages/ViewMyAuction";
import ViewAuctionDetails from "./pages/ViewAuctionDetails";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(getAllAuctionItems());
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
        <Route path="/about" element={<About />} />
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/auction/item/:id" element={<AuctionItem/>}/>
        <Route path="/create-auction" element={<CreateAuction/>}/>
        <Route path="/view-my-auction" element={<ViewMyAuction/>}/>
        <Route path="/auction/details/:id" element={<ViewAuctionDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;

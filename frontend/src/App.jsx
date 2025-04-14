import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideDrawer from "./layout/SideDrawer";
// import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import {SignIn, SignUp, useAuth} from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { userSlice } from "./store/slices/userSlice.js";
import { useEffect } from "react";

const App = () => {
  const { isSignedIn, user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn && user) {
      dispatch(userSlice.actions.loginSuccess({
        user: {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
          role: user.publicMetadata.role || 'User'
        }
      }));
    }
  }, [isSignedIn, user, dispatch]);

  return (
    <Router>
      <SideDrawer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="login" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
      <ToastContainer position="top-right"/>
    </Router>
  );
};

export default App;

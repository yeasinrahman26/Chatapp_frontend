import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);
  if (isCheckingAuth && !authUser)return(
    <div className="flex items-center justify-center h-screen">
      <Loader  className= "size-10 animate-spin" />
    </div>
  )
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    );
};

export default App;

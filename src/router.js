import React from 'react';
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import UserSetting from "./pages/UserSetting/UserSetting";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user_setting" element={<UserSetting />} />
    </Routes>
  )
}
export default Routers;
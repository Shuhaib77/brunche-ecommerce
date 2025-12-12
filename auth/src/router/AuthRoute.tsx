import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";

function AuthRoute() {
  return (
 
      <Routes>
        <Route path="test" element={<Login />} />
      </Routes>

  );
}

export default AuthRoute;

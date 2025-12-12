import { Routes, Route } from "react-router-dom";
import React from 'react'

const AuthApp = React.lazy(() => import("auth/App"));


function App() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthApp />} />
      
    </Routes>
  );
}

export default App;


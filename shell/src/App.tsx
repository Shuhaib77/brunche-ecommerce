// shell/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

const AuthApp = React.lazy(() => import("auth/App"));

export default function App() {
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <AuthApp />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

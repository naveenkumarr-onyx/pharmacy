import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Login from "./components/Login";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const renderProtectedRoute = (Component, props) => {
    return isLoggedIn === "true" ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/orders" element={renderProtectedRoute(Orders)} />
        <Route path="/" element={renderProtectedRoute(Login)} />
        <Route path="/products" element={renderProtectedRoute(Products)} />
        <Route path="/users" element={renderProtectedRoute(Users)} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

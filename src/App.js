import React from "react";
import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarTemplate";
import BookingHome from "./Views/BookingHome";
import CustomerInfo from "./Views/CustomerInfo";
import SuccessPage from "./Views/SuccessPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<BookingHome />} />
          <Route path="form" element={<CustomerInfo />} />
          <Route path="backend" element={<SuccessPage />} />
        </Route>
        <Route path="*" element={<div>Page not found 404</div>}></Route>
      </Routes>
    </>
  );
}

export default App;

// IMPORTS
import React, { Fragment } from "react";
import { Route, Routes } from "react-router";

// PAGES & COMPONENTS
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import ProfilesPage from "./pages/ProfilesPage";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;

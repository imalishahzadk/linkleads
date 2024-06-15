import Login from "pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "pages/Signup";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify/dist/react-toastify";
import { ToastContainer } from "react-toastify";
import Dashboard from "pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import CustomizeLeadMagnet from "pages/CustomizeLeadMagnet.jsx";
import CustomizeProductLeadMagnet from "pages/CustomizeProcuctLeadMagnet.jsx";
import CustomizeProductEmail from "pages/CustomizeProductsEmail.jsx";
import Temp from "pages/temp.jsx";
import LeadMagnet from "pages/lead-magnet.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import SidebarForMobile from "./components/SidebarForMobile/SidebarForMobile.jsx";
import Store from "pages/Store.jsx";
import Analytics from "pages/Analytics.jsx"
import Payment from "pages/Payment.jsx"
import axios from "axios";
import LeadMagnetEbookQuiz from "pages/LeadMagnetEbookQuiz.jsx"
import LeadMagnetProductQuiz from "pages/LeadMagnetProductQuiz.jsx"
import SelectEbook from "pages/SelectEbook.jsx"
import EbookMiniLanding from "pages/EbookMiniLanding.jsx"
import EditTemplate from "pages/EditTemplate.jsx";
import PreviewTemplate from "pages/PreviewTemplate";

import PageEditor1 from "./pages/PageEditor1.jsx"
import PageEditor2 from "./pages/PageEditor2.jsx"
import PageEditor3 from "./pages/PageEditor3.jsx"
import PageEditor4 from "./pages/PageEditor4.jsx"

import Plan from "./pages/Plan.jsx"
import Sales from "./pages/Sales.jsx"
import LandingPage from "./pages/LandingPage.jsx";

axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.baseURL = 'https://api.linkleads.ai';
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // window.location.href = '/auth';
      console.log(error.response);
    }
    return Promise.reject(error);
  }
);

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#28439D",
    },
    secondary: {
      main: "#F7F8FA",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route index element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/api/auth/callback/gitlab" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Wrapper Page={Dashboard} />} />
          <Route path="/payment" element={<Wrapper Page={Payment} />} />
          <Route path="/lead-magnet" element={<Wrapper Page={LeadMagnet} />} />
          <Route
            path="/customize-ebook-lead-magnet"
            element={<Wrapper Page={CustomizeLeadMagnet} />}
          />
          <Route
            path="/customize-product-lead-magnet"
            element={<Wrapper Page={CustomizeProductLeadMagnet} />}
          />
          <Route
            path="/customize-products-email"
            element={<Wrapper Page={CustomizeProductEmail} />}
          />
          <Route path="/my-page" element={<Wrapper Page={Temp} />} />
          <Route path="/page-editor" element={<Wrapper Page={Temp} />} />
          <Route path="/store" element={<Wrapper Page={Store} />} />
          <Route path="/analytics" element={<Wrapper Page={Analytics} />} />
          <Route path="/questionnaire" element={<Wrapper Page={Temp} />} />
          <Route path="/feedback" element={<Wrapper Page={Temp} />} />
          <Route path="/support" element={<Wrapper Page={Temp} />} />
          <Route path="/select-ebook" element={<Wrapper Page={SelectEbook} />} />
          <Route path="/ebook-mini-landing" element={<Wrapper Page={EbookMiniLanding} />} />
          <Route path="/preview-template" element={<Wrapper Page={PreviewTemplate} />} />
          <Route path="/edit-template" element={<Wrapper Page={EditTemplate} />} />
          <Route path="/page-editor1" element={<Wrapper Page={PageEditor1} />} />
          <Route path="/page-editor2" element={<Wrapper Page={PageEditor2} />} />
          <Route path="/page-editor3" element={<Wrapper Page={PageEditor3} />} />
          <Route path="/page-editor4" element={<Wrapper Page={PageEditor4} />} />

          <Route path="/lead-magnet-quiz/ebook/:username" element={<Wrapper Page={LeadMagnetEbookQuiz} />} />
          <Route path="/lead-magnet-quiz/product/:username" element={<Wrapper Page={LeadMagnetProductQuiz} />} />
          <Route path="/plan" element={<Wrapper Page={Plan} />} />
          <Route path="/sales" element={<Wrapper Page={Sales} />} />
          <Route path="/landing-page" element={<LandingPage/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

const Wrapper = ({ Page }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      {/* <div className="dashboard_container flex"> */}
      <div
        className="sticky top-0 z-50 p-2 text-4xl bg-primary text-white lg:hidden"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        <HiOutlineBars3 />
      </div>

      {openMenu && (
        <>
          <SidebarForMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </>
      )}

      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="min-h-screen flex-grow lg:ml-20">
        {/* <div className="min-h-screen flex-grow lg:ml-20"> */}
        <Page></Page>
      </div>
    </div>
  );
};

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import BMICalculator from "./pages/BMICalculator";
import JoinNow from "./pages/JoinNow";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import MembershipsPage from "./pages/admin/MembershipsPage";

import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";


// -----------------------
// Hide Navbar/Footer on Admin pages
// -----------------------
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  // Admin pages start with "/admin"
  const hideLayout = pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className="min-h-screen">{children}</div>
      {!hideLayout && <Footer />}
    </>
  );
}


export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>

          {/* 🌍 PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/contact" element={<Contact />} />


          {/* 🔥 ADMIN LOGIN (No Dashboard Layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />


          {/* 🔐 PROTECTED ADMIN ROUTES WITH LAYOUT */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Default admin page → Dashboard */}
            <Route index element={<AdminDashboard />} />

            {/* Admin pages */}
            <Route path="memberships" element={<MembershipsPage />} />
          </Route>

        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Contactpage from "./pages/Contactpage";
import Chartspage from "./pages/Chartpage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "../src/components/header";

function App() {
  const queryClient = new QueryClient();
  const [heading, setHeading] = useState("Contact");
  
  const RouteChangeHandler = () => { // for setting the name of the header
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/charts") {
        setHeading("Charts and Maps");
      } else {
        setHeading("Contact");
      }
    }, [location.pathname]);

    return null; // This component does not render anything
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteChangeHandler />
        <div className="w-full">
          <Header heading={heading} />
          <div className="flex flex-col md:flex-row w-full">
            <aside className="w-full md:w-1/5 bg-blue-200 h-sidebar-height-mobile md:h-sidebar-height flex flex-col shadow-lg">
              <nav className="flex-1 p-0 md:p-4">
                <Link
                  to="/contact"
                  className="block p-4 mb-2 text-black text-xl rounded hover:bg-blue-300 transition duration-300"
                >
                  Contact
                </Link>
                <Link
                  to="/charts"
                  className="block p-4 text-black text-xl rounded hover:bg-blue-300 transition duration-300"
                >
                  Charts and Maps
                </Link>
              </nav>
            </aside>
            <div className="w-full md:w-4/5">
              <Routes>
                <Route path="/contact" element={<Contactpage />} />
                <Route path="/charts" element={<Chartspage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

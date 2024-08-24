import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Contactpage from "./pages/Contactpage";
import Chartspage from "./pages/Chartpage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="w-full">
          <div className="w-full top-0 px-5 py-5 bg-blue-400 flex justify-center">
            Contact
          </div>
          <div className="flex w-full">
            <div className="w-1/5 flex flex-col sidebar-height bg-blue-200">
              <Link to="/contact" className="p-4 text-black hover:bg-blue-500">
                Contact
              </Link>
              <Link to="/charts" className="p-4 text-black hover:bg-blue-500">
                Charts
              </Link>
            </div>
            <div className="w-4/5">
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

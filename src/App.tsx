import React from "react";
import "./App.css";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <div className="w-full">
      <div className="w-full top-0 px-5 py-5 bg-blue-400 flex justify-center">
        Contact
      </div>
      <div className="flex w-full">
        <div className="w-1/5 bg-green-400 sidebar-height">check</div>
        <div className="w-4/5">
          <Contactpage />
        </div>
      </div>
    </div>
  );
}

export default App;

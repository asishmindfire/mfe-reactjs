import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

// Async import
// const Header = React.lazy(() => import("home/Header"));

// Sync
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PdpContent";

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);
  return (
    <Router>

    <div className="container">
      {/* {showHeader && <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>} */}
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div>
      <Routes>
      <Route path="/users/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>

  );
};
ReactDOM.render(<App />, document.getElementById("app"));

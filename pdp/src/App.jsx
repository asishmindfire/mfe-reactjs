import React, { Suspense, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

// Async import
// const Header = React.lazy(() => import("home/Header"));

// Sync
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PdpContent from "./PdpContent";
import { ListComponentmount } from "vueapp/ListComponent";
import { CounterProvider } from "home/context";
import MyComponent from "./MyComponent";

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    ListComponentmount(ref.current);
  }, []);
  return (
    <>
    <CounterProvider>
      <div className="container">
        {/* {showHeader && <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>} */}
        <SafeComponent>
          <Header />
        </SafeComponent>
        <div ref={ref} />
        <MyComponent />
        <Router>
          <div>
            <Routes>
              <Route path="/users/:id" element={<PdpContent />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </CounterProvider>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

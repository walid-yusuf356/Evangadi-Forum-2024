import { Route, Routes } from "react-router-dom";
import LandingLayout from "./pages/landingLayout/LandingLayout";
// import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LandingLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

// import React from "react";
// import LandingLayout from "./pages/landingLayout/LandingLayout";
// import Home from "./pages/Home/Home";
// function App() {
//   return (
//     <>
//       <LandingLayout />
//       {/* <Home /> */}
//     </>
//   );
// }

// export default App;

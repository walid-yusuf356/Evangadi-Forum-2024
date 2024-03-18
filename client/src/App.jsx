import { Route, Routes } from "react-router-dom";
import LandingLayout from "./pages/landingLayout/LandingLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Answer from "./components/Answer/Answer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/askQuestion" element={<AskQuestion />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

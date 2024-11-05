import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Questions from "./components/Questions";
import Dashboard from "./components/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  const handleAuth = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage onAuth={handleAuth} />} />
        {isAuthenticated && isFirstTimeUser ? (
          <Route
            path="/questions"
            element={<Questions setIsFirstTimeUser={setIsFirstTimeUser} />}
          />
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

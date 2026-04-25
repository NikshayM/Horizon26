import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import ProfileSetup from "./pages/ProfileSetup";
import FinancialSetup from "./pages/FinancialSetup";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/financial" element={<FinancialSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import FrontPage from "./FrontPage";
import Login from "./Login";
import Register from "./Register";
import { UserContextProvider } from "./UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  );
}

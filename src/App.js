import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<div className="App"><Home /></div>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

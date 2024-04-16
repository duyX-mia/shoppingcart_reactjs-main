import logo from "./logo.svg";
import "./App.css";


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./components/Shop";
import NotFound from './routes/NotFound';
import Admin from './routes/Admin';
import Signup from './routes/Signup';
import Login from './routes/Login';
import TestSignup from './routes/TestSignup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="TestSignup" element={<TestSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

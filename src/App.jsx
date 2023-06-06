import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<AuthLayout/>}>
            <Route path="" element={<SignUp/>}/>
          </Route>   
          <Route path="/login" element={<AuthLayout/>}>
            <Route path="" element={<Login/>}/>
          </Route>   
          <Route path="/" element={<PublicLayout/>}>
            <Route path="" element={<Index/>}/>
          </Route>   
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

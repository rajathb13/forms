import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginComponent } from './pages/login';
import { RegistrationComponent } from './pages/register';
import { Landingpage } from './pages/landingpage';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<LoginComponent/>}></Route>
        <Route path="/register" element={<RegistrationComponent/>}></Route>
        <Route path='/landing' element={<Landingpage/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import MyHome from "./components/myHomePage/myhome";
import FirstPageDashboard from './components/firstpageDashboard/firstPageDashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Routes>
        <Route path="/" element={<FirstPageDashboard />} />
        <Route path="/myhome" element={<MyHome />} />
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import UploadServices from './components/DashBoard/Upload/UploadServices';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-rk" element={<DashBoard />} >
            <Route index element={
              <UploadServices></UploadServices>
            }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

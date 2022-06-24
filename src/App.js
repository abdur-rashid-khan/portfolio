
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import UploadServices from './components/DashBoard/Upload/UploadServices';
import ProjectsPost from './components/DashBoard/ProjectsPost/ProjectsPost';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import ManageProjects from './components/DashBoard/ManageProjects/ManageProjects';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-rk" element={<DashBoard />} >
            <Route index path='/admin-rk' element={
              <ManageServices></ManageServices>
            }></Route>
            <Route path='/admin-rk/upload-service' element={
              <UploadServices></UploadServices>
            }></Route>
            <Route path='/admin-rk/manage-projects' element={
              <ManageProjects></ManageProjects>
            }></Route>
            <Route path='/admin-rk/project-add' element={
              <ProjectsPost></ProjectsPost>
            }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

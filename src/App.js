
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import UploadServices from './components/DashBoard/Upload/UploadServices';
import ProjectsPost from './components/DashBoard/ProjectsPost/ProjectsPost';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import ManageProjects from './components/DashBoard/ManageProjects/ManageProjects';
import SkillsPost from './components/DashBoard/SkillsPost/SkillsPost';
import ManageSkills from './components/DashBoard/ManageSkills/ManageSkills';

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
          <Route path='/admin-rk/add-skill' element={
            <SkillsPost></SkillsPost>
          }></Route>
          <Route path='/admin-rk/manage-skills' element={
            <ManageSkills></ManageSkills>
          }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

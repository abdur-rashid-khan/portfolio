
import './App.css';
import Home from './components/Home/Home';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import UploadServices from './components/DashBoard/Upload/UploadServices';
import ProjectsPost from './components/DashBoard/ProjectsPost/ProjectsPost';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import ManageProjects from './components/DashBoard/ManageProjects/ManageProjects';
import SkillsPost from './components/DashBoard/SkillsPost/SkillsPost';
import ManageSkills from './components/DashBoard/ManageSkills/ManageSkills';
import AddReview from './components/DashBoard/Review/AddReview';
import ManageReview from './components/DashBoard/Review/ManageReview';
import ManageBlog from './components/DashBoard/ManageBlog/ManageBlog';
import AddBlog from './components/DashBoard/ManageBlog/AddBlog';
import SingleBlog from './components/Blog/SingleBlog';
import BestProjects from './components/BestProjects/BestProjects';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import AboutMe from './components/AboutMe/AboutMe';
import Error from './components/Error/Error';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
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
          <Route path='/admin-rk/add-review' element={
            <AddReview></AddReview>
          }></Route>
          <Route path='/admin-rk/manage-review' element={
            <ManageReview></ManageReview>
          }></Route>
          <Route path='/admin-rk/add-blog' element={
            <AddBlog></AddBlog>
          }></Route>
          <Route path='/admin-rk/manage-blog' element={
            <ManageBlog></ManageBlog>
          }></Route>
        </Route>
        {/*  */}
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/project" element={<BestProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;

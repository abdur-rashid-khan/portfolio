
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
import RequireAuth from './components/Auth/RequireAuth';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/CreateAccout/NewAccount';
import Profile from './components/DashBoard/Admin/Profile';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin-rk" element={<DashBoard />} >
          <Route index path='/admin-rk' element={
            <RequireAuth>
              <Profile></Profile>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/manage-services' element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/upload-service' element={
            <RequireAuth>
              <UploadServices></UploadServices>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/manage-projects' element={
            <RequireAuth>
              <ManageProjects></ManageProjects>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/project-add' element={
            <RequireAuth>
              <ProjectsPost></ProjectsPost>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/add-skill' element={
            <RequireAuth>
              <SkillsPost></SkillsPost>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/manage-skills' element={
            <RequireAuth>
              <ManageSkills></ManageSkills>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/add-review' element={
            <RequireAuth>
              <AddReview></AddReview>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/manage-review' element={
            <RequireAuth>
              <ManageReview></ManageReview>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/add-blog' element={
            <RequireAuth>
              <AddBlog></AddBlog>
            </RequireAuth>
          }></Route>
          <Route path='/admin-rk/manage-blog' element={
            <RequireAuth>
              <ManageBlog></ManageBlog>
            </RequireAuth>
          }></Route>
        </Route>
        {/*  */}
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/project" element={<BestProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;

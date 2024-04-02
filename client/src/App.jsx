import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from "./components/ScrollToTop";
import OnlyAdminPrivateRoute from "./components/private/OnlyAdminPrivateRoute";
import PrivateRoute from "./components/private/PrivateRoute";
import About from './pages/About';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";
import Dashboard from './pages/dashboard/Dashboard';
import PostPage from "./pages/posts/PostPage";
import Conferences from "./pages/research/Conferences";
import Enviroment from './pages/research/Enviroment';
import Journal from "./pages/research/Journal";
import Publication from './pages/research/Publication';
export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />

        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />} >
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>




        <Route path='/research' element={<Research/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/post/:postSlug' element={<PostPage />} />
<Route path="/Journal" element={<Journal/>}/>
<Route path="/Conferences" element={<Conferences/>}/>
<Route path="/Enviroment" element={<Enviroment/>}/>
<Route path="/Publication" element={<Publication/>}/>



    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
};
import TopBar from "./components/Topbar/TopBar";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Login from './pages/login/Login.jsx';
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Post from "./components/post/Post.jsx";

function App() {
  const user = false;
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route exact  path="/" element={<Home />} />
      <Route path="/register" element= { user ? <Home /> :  <Register />} />
      <Route path="/login" element= { user ? <Home /> : <Login />} />
      <Route path="/write" element={ user ? <Write />  : <Register />} />
      <Route path="/settings" element={ user ?  <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
    </Routes>
    </Router>
  );
}

export default App;

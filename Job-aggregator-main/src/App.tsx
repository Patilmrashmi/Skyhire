import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './components/users/login';
import Register from './components/users/register';
import Homepage from "./pages/homepage";
import SignInwithGoogle from "./components/auth/signInWithGoogle";
import AllJobs from "./pages/AllJobs";
import BookmarkedJobs from "./pages/BookmarkedJobs";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/bookmarked-jobs" element={<BookmarkedJobs />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;

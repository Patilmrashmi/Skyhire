// filepath: /d:/JB/Job-aggregator-main - Copy/Job-aggregator-main/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ApplyPage from './components/ApplyPage';
import AllJobs from './pages/AllJobs';
import BookmarkedJobs from './pages/BookmarkedJobs';
import Login from './components/users/login';
import Register from './components/users/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/apply/:jobId" element={<ApplyPage />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/bookmarked-jobs" element={<BookmarkedJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
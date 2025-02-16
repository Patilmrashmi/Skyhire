import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../components/JobListings';
import { MapPin, Clock, DollarSign, Star, BookmarkIcon } from 'lucide-react';

function BookmarkedJobs() {
  const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
    const storedBookmarks = localStorage.getItem('bookmarkedJobs');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  const [bookmarkedJobDetails, setBookmarkedJobDetails] = useState([]);

  useEffect(() => {
    const jobDetails = jobs.filter((job) => bookmarkedJobs.includes(job.id));
    setBookmarkedJobDetails(jobDetails);
  }, [bookmarkedJobs]);

  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prevBookmarkedJobs) => {
      const jobIdNum = Number(jobId);
      if (prevBookmarkedJobs.includes(jobIdNum)) {
        return prevBookmarkedJobs.filter((id) => id !== jobIdNum);
      } else {
        return [...prevBookmarkedJobs, jobIdNum];
      }
    });
  };

  const isBookmarked = (jobId) => {
    return bookmarkedJobs.includes(Number(jobId));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Bookmarked Jobs</h1>
      {bookmarkedJobDetails.length === 0 ? (
        <p>No bookmarked jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {bookmarkedJobDetails.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-8 border border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-200 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-500 text-sm font-medium">
                  {job.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">{job.company}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="h-5 w-5 mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  {job.posted}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-pink-50 text-pink-500 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => toggleBookmark(job.id)}
                  className={`p-2 rounded-full ${isBookmarked(job.id) ? 'bg-pink-200' : 'bg-gray-200'} hover:bg-pink-300 transition-colors duration-200`}
                >
                  <BookmarkIcon className="h-5 w-5" />
                </button>
                <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium hover:opacity-90 transition-opacity ml-2">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarkedJobs;

import React, { useState, useEffect } from 'react';
import { MapPin, Clock, DollarSign, Star, BookmarkIcon } from 'lucide-react';

export let jobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Dropbox",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop",
    location: "San Francisco, CA",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "2 days ago",
    tags: ["UI/UX", "Figma", "Design Systems"],
    bookmarked: false
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Spotify",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=128&h=128&fit=crop",
    location: "Remote",
    salary: "$90k - $120k",
    type: "Full-time",
    posted: "1 day ago",
    tags: ["React", "TypeScript", "Tailwind"],
    bookmarked: false
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Slack",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Product Strategy", "Agile", "B2B"],
    bookmarked: false
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Google",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Product Strategy", "Agile", "B2B"],
    bookmarked: false
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Amazon",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Product Strategy", "Agile", "B2B"],
    bookmarked: false
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Microsoft",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "New York, NY",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Product Strategy", "Agile", "B2B"],
    bookmarked: false
  },
  {
    id: 7,
    title: "UX Designer",
    company: "Apple",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "San Francisco, CA",
    salary: "$140k - $170k",
    type: "Full-time",
    posted: "4 days ago",
    tags: ["UI/UX", "Interaction Design", "User Research"],
    bookmarked: false
  },
  {
    id: 8,
    title: "Technical Lead",
    company: "Netflix",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Los Angeles, CA",
    salary: "$160k - $200k",
    type: "Full-time",
    posted: "5 days ago",
    tags: ["Leadership", "Software Architecture", "Agile"],
    bookmarked: false
  },
  {
    id: 9,
    title: "Data Analyst",
    company: "Facebook",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Menlo Park, CA",
    salary: "$110k - $140k",
    type: "Full-time",
    posted: "6 days ago",
    tags: ["Data Analysis", "SQL", "Python"],
    bookmarked: false
  },
  {
    id: 10,
    title: "DevOps Engineer",
    company: "Amazon",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Seattle, WA",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "7 days ago",
    tags: ["DevOps", "AWS", "Docker"],
    bookmarked: false
  },
  {
    id: 11,
    title: "Security Engineer",
    company: "Google",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Mountain View, CA",
    salary: "$150k - $180k",
    type: "Full-time",
    posted: "8 days ago",
    tags: ["Security", "Cybersecurity", "Penetration Testing"],
    bookmarked: false
  },
  {
    id: 12,
    title: "Machine Learning Engineer",
    company: "Microsoft",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Redmond, WA",
    salary: "$170k - $210k",
    type: "Full-time",
    posted: "9 days ago",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    bookmarked: false
  },
  {
    id: 13,
    title: "Mobile Developer",
    company: "Facebook",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Menlo Park, CA",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "10 days ago",
    tags: ["Mobile Development", "iOS", "Android"],
    bookmarked: false
  },
  {
    id: 14,
    title: "Game Developer",
    company: "Activision Blizzard",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Santa Monica, CA",
    salary: "$100k - $130k",
    type: "Full-time",
    posted: "11 days ago",
    tags: ["Game Development", "C++", "Unity"],
    bookmarked: false
  },
  {
    id: 15,
    title: "Cloud Architect",
    company: "Amazon",
    logo: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=128&h=128&fit=crop",
    location: "Seattle, WA",
    salary: "$180k - $220k",
    type: "Full-time",
    posted: "12 days ago",
    tags: ["Cloud Architecture", "AWS", "Azure"],
    bookmarked: false
  }
];

const JOBS_PER_PAGE = 9;

export default function JobListings({ jobTitle = '', location = '' }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedJobs, setBookmarkedJobs] = useState(() => {
      const storedBookmarks = localStorage.getItem('bookmarkedJobs');
      return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    });

    useEffect(() => {
      localStorage.setItem('bookmarkedJobs', JSON.stringify(bookmarkedJobs));
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

    const filteredJobs = jobs.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(jobTitle.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return titleMatch && locationMatch;
    });

    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = startIndex + JOBS_PER_PAGE;
    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

    const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {currentJobs.map((job) => (
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

        <div className="flex justify-center mt-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-lg mr-2"
          >
            Previous
          </button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
            let startPage = currentPage - 1;
            if (startPage < 1) {
              startPage = 1;
            } else if (startPage > totalPages - 2 && totalPages > 2) {
              startPage = totalPages - 2;
            }
            const pageNumber = startPage + i;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`px-4 py-2 bg-gray-200 rounded-lg mx-1 ${
                  currentPage === pageNumber ? 'font-bold' : ''
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function toggleBookmark(jobId) {
    setBookmarkedJobs((prevBookmarkedJobs) => {
      const jobIdNum = Number(jobId);
      if (prevBookmarkedJobs.includes(jobIdNum)) {
        return prevBookmarkedJobs.filter((id) => id !== jobIdNum);
      } else {
        return [...prevBookmarkedJobs, jobIdNum];
      }
    });
  }

  function isBookmarked(jobId) {
    return bookmarkedJobs.includes(Number(jobId));
  }

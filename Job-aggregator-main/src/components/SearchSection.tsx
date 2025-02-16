import { Search, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobs } from './JobListings';

export default function SearchSection() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobTitles, setFilteredJobTitles] = useState([]);
  const navigate = useNavigate();

  const handleJobTitleChange = (e) => {
    const inputValue = e.target.value;
    setJobTitle(inputValue);

    const filtered = jobs
      .filter((job) =>
        job.title.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((job) => job.title);

    // Remove duplicates
    const uniqueFiltered = [...new Set(filtered)];
    setFilteredJobTitles(uniqueFiltered);
  };

  const handleJobTitleSelect = (title) => {
    setJobTitle(title);
    setFilteredJobTitles([]); // Hide dropdown
  };

  const handleSearch = () => {
    navigate(`/all-jobs?jobTitle=${jobTitle}&location=${location}`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Find Your Dream Job Today
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 relative">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="ml-2 w-full focus:outline-none"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
              {filteredJobTitles.length > 0 && (
                <div className="absolute z-10 left-0 mt-2 w-full bg-white border rounded-md shadow-lg">
                  {filteredJobTitles.map((title, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleJobTitleSelect(title)}
                    >
                      {title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="ml-2 w-full focus:outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 mr-2" />
              Search Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

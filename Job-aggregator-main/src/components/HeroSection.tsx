import { Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { jobs } from './JobListings';
import { useNavigate } from 'react-router-dom';

const popularSearches = ['UI Designer', 'Product Manager', 'Developer', 'Remote'];

export default function HeroSection() {
  const [jobTitle, setJobTitle] = useState('');
  const [filteredJobTitles, setFilteredJobTitles] = useState([]);
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);

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
    if (uniqueFiltered.length > 0) {
      setFilteredJobTitles(uniqueFiltered);
    } else {
      setFilteredJobTitles([]);
    }
  };

  const handleJobTitleSelect = (title) => {
    setJobTitle(title);
    setFilteredJobTitles([]); // Hide dropdown
  };

  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setLocation(inputValue);

    const filtered = jobs
      .filter((job) =>
        job.location.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((job) => job.location);

    // Remove duplicates
    const uniqueFiltered = [...new Set(filtered)];
    if (uniqueFiltered.length > 0) {
      setFilteredLocations(uniqueFiltered);
    } else {
      setFilteredLocations([]);
    }
  };

  const handleLocationSelect = (location) => {
    setLocation(location);
    setFilteredLocations([]); // Hide dropdown
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/all-jobs?jobTitle=${jobTitle}&location=${location}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-pink-300 to-rose-200  pt-24 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-100/40 to-rose-100/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-rose-100/40 to-pink-100/40 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream Job With{' '}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              SkyHire
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Connect with top companies and opportunities that match your skills and aspirations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 flex items-center gap-3 px-4 py-3 border rounded-xl relative">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full bg-transparent focus:outline-none text-gray-900"
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
            <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 border rounded-xl relative">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent focus:outline-none text-gray-900"
                value={location}
                onChange={handleLocationChange}
              />
              {filteredLocations.length > 0 && (
                <div className="absolute z-10 left-0 mt-2 w-full bg-white border rounded-md shadow-lg">
                  {filteredLocations.map((location, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="md:col-span-3 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium hover:opacity-90"
              onClick={handleSearch}
            >
              Search Jobs
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <span className="text-sm text-gray-500">Popular Searches:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              className="px-4 py-1.5 rounded-full bg-white border border-pink-100 text-sm text-gray-700 hover:border-pink-200 hover:bg-pink-50"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

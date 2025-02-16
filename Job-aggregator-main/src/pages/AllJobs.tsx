import React from 'react';
import JobListings from '../components/JobListings';
import { useLocation } from 'react-router-dom';

export default function AllJobs() {
  const location = useLocation();
  const jobTitle = new URLSearchParams(location.search).get('jobTitle') || '';
  const locationParam = new URLSearchParams(location.search).get('location') || '';

  return (
    <div className="px-8 py-24 bg-featured-job-bg">
      <h1 className="text-3xl font-bold text-gray-900 text-center my-8">All Jobs</h1>
      <JobListings jobTitle={jobTitle} location={locationParam} />
    </div>
  );
}

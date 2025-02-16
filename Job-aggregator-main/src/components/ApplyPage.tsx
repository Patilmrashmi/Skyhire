// filepath: /D:/JB/Job-aggregator-main - Copy/Job-aggregator-main/src/components/ApplyPage.tsx
import { useParams } from 'react-router-dom';

export default function ApplyPage() {
  const { jobId } = useParams();

  return (
    <div>
      <h1>Apply for Job ID: {jobId}</h1>
      {/* Add your application form or details here */}
    </div>
  );
}
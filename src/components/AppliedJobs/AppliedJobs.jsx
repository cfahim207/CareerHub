import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../Utility/appliedJobs";
import JobApplied from "../JobApplied/JobApplied";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setappliedJobs] = useState([]);
    useEffect(() => {
        const storedId = getAppliedJobs();
        if (jobs.length > 0) {
            const JobsApplied = jobs.filter(job => storedId.includes(job.id));
            setappliedJobs(JobsApplied);
            
            
        }
    },[])
    return (
        <div className="p-4">
            <div className="relative mb-32">
                <img src="/src/assets/images/bg1.png" alt="" />
                <img src="/src/assets/images/bg2.png" className="absolute top-0 right-0 transform -translate-x-0 -translate-y-1/2" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Applied Jobs</h1>
                </div>
            </div>
            {
                appliedJobs.map(job=><JobApplied key={job.id} job={job}></JobApplied>)
            }
        </div>
    );
};

export default AppliedJobs;
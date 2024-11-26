import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FetureJobs = () => {
    const [jobs, setjobs] = useState([]);
    const[JobLength,setJobLength]=useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
        
    }, [])
    
    return (
        <div>
            <div className="text-center space-y-4 p-4">
                <h2 className="text-5xl font-bold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 p-4 mt-16 gap-5">
                
                {
                    jobs.slice(0,JobLength).map(job=> <Job key={job.id} job={job}></Job>)
                }

            </div>

            <div className={JobLength === jobs.length ? 'hidden':'text-center'}>
                <button onClick={()=>setJobLength(jobs.length)} className="btn bg-gradient-to-r from-blue-300 to-indigo-500 px-9 text-white mt-10">See All Jobs</button>
            </div>
        </div>
    );
};

export default FetureJobs;
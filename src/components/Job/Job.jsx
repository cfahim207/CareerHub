import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id,logo, location, salary, job_type, remote_or_onsite, company_name, job_title } = job;
    return (
        <div className="card card-compact bg-base-100 p-4 border border-gray-300">

            <div className="p-4">
                <img
                    src="/src/assets/logo/netflix.png"
                    alt="Shoes" />
            </div>

            <div className="card-body space-y-4">
                <h2 className="card-title text-3xl font-bold">{job_title}</h2>
                <h5 className="text-base-400 text-lg font-semibold text-gray-400">{company_name} </h5>
                <div className="">
                    <p className="border-2 border-blue-300 text-lg font-semibold text-blue-400 rounded px-4 py-2 inline mr-4">{remote_or_onsite}</p>
                    <p className="border-2 border-blue-400 text-lg font-semibold text-blue-400 rounded px-4 py-2 inline">{job_type} </p>
                </div>
                <div className="flex items-center gap-5 text-xl font-medium text-gray-400">
                    <div className="flex items-center justify-center gap-3">
                        <img src="/src/assets/icons/Location.png" alt="" />
                        <p >{location}</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <img src="/src/assets/icons/money.png" alt="" />
                        <p>{salary} </p>
                    </div>
                    
                    
                </div>
                <div className="card-actions">
                <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-blue-400 to-indigo-600 text-white">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;
import { Link } from "react-router-dom";


const JobApplied = ({ job }) => {
    return (
        <div className="border border-gray-200 p-5 mb-6 shadow-sm">
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-8">
                    <div className="md:p-14 rounded-md bg-gray-100">
                        <img src="/src/assets/logo/google.png" alt="" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="card-title text-3xl font-bold">{job.job_title}</h2>
                        <h5 className="text-base-400 text-lg font-semibold text-gray-400">{job.company_name} </h5>
                        <div>

                            <p className="border-2 border-blue-300 text-lg font-semibold text-blue-400 rounded px-4 py-2 inline mr-4">{job.remote_or_onsite}</p>
                            <p className="border-2 border-blue-400 text-lg font-semibold text-blue-400 rounded px-4 py-2 inline">{job.job_type} </p>

                        </div>

                        <div className="flex items-center gap-5 text-xl font-medium text-gray-400">
                            <div className="flex items-center justify-center gap-3">
                                <img src="/src/assets/icons/Location.png" alt="" />
                                <p >{job.location}</p>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <img src="/src/assets/icons/money.png" alt="" />
                                <p>{job.salary} </p>
                            </div>


                        </div>
                    </div>
                </div>

                <Link to={`/job/${job.id}`}>
                    <button className="btn bg-gradient-to-r from-blue-400 to-indigo-600 text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default JobApplied;
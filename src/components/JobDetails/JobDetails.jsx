import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveAppliedJobs } from "../../Utility/appliedJobs";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleappliedjobs = () => {
        SaveAppliedJobs(idInt);
        toast("Applied Job Successfully!!");
    }

    
    
    return (
        <div className=" mb-32">
            <div className="relative mb-32">
                <img src="/src/assets/images/bg1.png" alt="" />
                <img src="/src/assets/images/bg2.png" className="absolute top-0 right-0 transform -translate-x-0 -translate-y-1/2" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Job Details</h1>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-4 px-4">
                <div className="md:col-span-3 space-y-5 text-justify">
                    <p><span className="font-bold">Job Description: </span>{job.job_description}</p>

                    <p><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>

                    <p><span className="font-bold">Educational Requirements: </span></p>
                    <p>{job.educational_requirements}</p>

                    <p><span className="font-bold">Experiences:</span></p>
                    <p>{job.experiences}</p>


                </div>
                <div >
                    <div className="p-5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg space-y-5">
                        <h2 className="text-xl font-bold">Job Details</h2>
                        <hr className="mt-5 border border-blue-300" />
                        <div className="flex items-center gap-3">
                            <img src="/src/assets/icons/money.png" alt="" />
                            <h1><span className="font-bold">Salary: </span>{job.salary} (Per Month)</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/src/assets/icons/calendar.png" alt="" />
                            <h1><span className="font-bold">Job Title: </span>{job.job_title}</h1>
                        </div>

                        <h1 className=" text-lg font-bold">Contact Information</h1>
                        <hr className="border border-blue-300" />

                      
                        <div className="flex items-center gap-3">
                            <img src="/src/assets/icons/phone.png" alt="" />
                            <h1><span className="font-bold">Phone: </span>{job.contact_information.phone}</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src="/src/assets/icons/email.png" alt="" />
                            <h1><span className="font-bold">Email: </span>{job.contact_information.email}</h1>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src="/src/assets/icons/location2.png" alt="" />
                            <h1><span className="font-bold">Location: </span>{job.contact_information.address}</h1>
                        </div>

                        


                    </div>
                    <button onClick={handleappliedjobs} className="mt-5 w-full btn bg-gradient-to-r from-blue-400 to-indigo-600 text-white">Apply Now</button>

                </div>

                

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
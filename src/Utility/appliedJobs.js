const getAppliedJobs = () => {
    const storedAppliedJobs = localStorage.getItem('job-application');
    if (storedAppliedJobs) {
        return JSON.parse(storedAppliedJobs);
    }
    return [];
}

const SaveAppliedJobs = id => {
    const StoredAppliedJobs = getAppliedJobs();
    const exists = StoredAppliedJobs.find(jobid => jobid === id);
    if (!exists) {
        StoredAppliedJobs.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoredAppliedJobs));

    }
}

export {SaveAppliedJobs,getAppliedJobs}


const Banner = () => {
    return (
        <div className="mt-7">
            <div className="grid md:grid-cols-2 justify-between items-center px-4">
                <div className="space-y-8">
                    <h1 className="font-extrabold text-7xl ">One Step <br /> Close To Your <span className="text-indigo-400">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="px-5 py-3 font-medium rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 text-white">Get Started</button>
                </div>
                <div>
                    <img src="/src/assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
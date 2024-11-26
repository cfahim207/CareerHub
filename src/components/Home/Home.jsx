import Banner from "../Banner/Banner";
import FetureJobs from "../FetureJobs/FetureJobs";
import JobCategorys from "../JobCategorys/JobCategorys";


const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <section className="mb-28">
                <Banner></Banner>
            </section>

            {/* Category Section */}
            <section className="mb-28">
                <JobCategorys></JobCategorys>
            </section>

            {/* Featured Job section */}
            <section id="feture" className="mb-28">
                <FetureJobs></FetureJobs>
            </section>
        </div>
    );
};

export default Home;
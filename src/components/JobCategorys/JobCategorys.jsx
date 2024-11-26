import { useEffect, useState } from "react";
import Category from "../Category/Category";


const JobCategorys = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategorys(data))
        
    },[])
    
    return (
        <div>
            <div className="text-center space-y-4 p-4">
                <h2 className="text-5xl font-bold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 p-4 mt-16 gap-3">
                {
                    categorys.map(category => 
                        <Category key={category.id} category={category}></Category>
                    )
                }
            </div>
        </div>
    );
};

export default JobCategorys;
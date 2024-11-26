
const Category = ({ category }) => {
    const { availability, category_name } = category;
    return (
        <div className="space-y-2 bg-indigo-100 p-4 rounded-lg">
            
            <img className="mb-12" src="/src/assets/icons/accounts.png" alt="" />
            <h3 className="font-bold text-xl">{category_name}</h3>
            <span className=" text-sm"> {availability} </span>

        </div>
    );
};

export default Category;
import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <li> <NavLink to='/'
            className={({ isActive }) =>
            isActive
                    ? 'text-blue-400 font-bold underline bg-white '
                : 'text-gray-500 hover:text-blue-500 bg-white '}
        >Home</NavLink>  </li>
        <li><NavLink to='/jobs' className={({ isActive }) =>
            isActive
                ? 'text-blue-400 font-bold underline bg-white '
                : 'text-gray-500 hover:text-blue-500 bg-white '} >Jobs</NavLink> </li>
        <li> <NavLink to='/applied' className={({ isActive }) =>
            isActive
                ? 'text-blue-400 font-bold underline bg-white '
                : 'text-gray-500 hover:text-blue-500 bg-white '} >Applied Jobs</NavLink>  </li>
        <li> <NavLink to='/statistic' className={({ isActive }) =>
            isActive
                ? 'text-blue-400 font-bold underline bg-white '
                : 'text-gray-500 hover:text-blue-500 bg-white '} >Statistic</NavLink>  </li>
        <li> <NavLink to='/blogs' className={({ isActive }) =>
            isActive
                ? 'text-blue-400 font-bold underline bg-white '
                : 'text-gray-500 hover:text-blue-500 bg-white '} >Blogs</NavLink>  </li>
    </>
    return (
        <div className="navbar bg-base-100 mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-3xl hover:text-blue-400">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-medium">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;
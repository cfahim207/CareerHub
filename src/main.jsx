import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistic from './components/Statistic/Statistic.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>,
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

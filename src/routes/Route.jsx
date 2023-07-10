import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Overview from "../pages/Overview/Overview";
import Search from "../pages/Search/Search";
import Notes from "../pages/Notes/Notes";
import Announcements from "../pages/Announcements/Announcements";
import Review from "../pages/Review/Review";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Overview></Overview>
            },
            {
                path : '/search',
                element: <Search></Search>
            },
            {
                path : '/notes',
                element: <Notes></Notes>
            },
            {
                path: '/announcements',
                element: <Announcements></Announcements>
            },
            {
                path: '/reviews',
                element: <Review></Review>
            }
        ]
    },
]);

export default router
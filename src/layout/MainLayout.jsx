import Navbar from "../pages/Navbar/Navbar";
import Home from "../pages/home/Home";

const MainLayout = () => {
    return (
        <div className="bg-[#121F3A] text-white ">
            <Navbar ></Navbar>
            <Home></Home>
        </div>
    );
};

export default MainLayout;
import ReactPlayer from "react-player";
import { MdOndemandVideo } from 'react-icons/md';
import { useState } from "react";
import video from '../../assets/vidoe.mp4'
import Tab from "./Tabs/Tab";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className="h-[200vh] mx-24 ">
            <div className=" flex  ">
                <div className=" w-[70%]">
                    <ReactPlayer
                        width='100%'
                        height='500px'
                        controls={true}
                        url={video} />
                </div>
                <div className={`fixed top-[95px] right-24 bg-[#0c0b30] text-white rounded-lg h-[31rem] w-[25%] p-4`}>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Course Content</h1>
                        <button onClick={handleOpen}>X</button>
                    </div>
                    <ul className="p-4 mt-5 w-[full] h-[25rem] text-white overflow-y-scroll bg-[#121F3A] ">
                        <li>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" checked="checked" />
                                <div className="collapse-title ">
                                    <h1 className="font-semibold text-lg">Section 1: Learn Python From Scratch</h1>
                                    <p className="text-xs">0/20 | 1hr 19min</p>
                                </div>
                                <div className="collapse-content">
                                    <ul className="flex flex-col gap-3">
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>1. Install Python</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">7min</span> </p>
                                        </li>
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>2. Hello World</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">5min</span> </p>
                                        </li>
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>3. Data Type</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">12min</span> </p>
                                        </li>
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>4. Numbers</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">15min</span> </p>
                                        </li>
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>5. Math Function</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">6min</span> </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title">
                                    <h1 className="font-semibold text-lg">Section 2: Python Coding Project</h1>
                                    <p className="text-xs">0/20 | 11min</p>
                                </div>
                                <div className="collapse-content">
                                    <ul className="flex flex-col gap-3">
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>6. Web Application</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">6min</span> </p>
                                        </li>
                                        <li className="hover:bg-[#0c0b30] hover:cursor-pointer p-3 rounded-lg">
                                            <p>7. Building First Directory</p>
                                            <p className="flex items-center gap-2"> <MdOndemandVideo /> <span className="text-xs text-gray-400">5min</span> </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <Tab></Tab>
            <div className="mt-5 w-[70%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;
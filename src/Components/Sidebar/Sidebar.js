import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFireFlameCurved, faMusic, faTv, faHeadset, faNewspaper, faGear, faFlag, faLightbulb, faVolleyballBall , faQuestionCircle, faMessage} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isSidebarOpen = useSelector(store => store.navigation.isSidebarOpen);

    if(!isSidebarOpen){
        return <ClosedSidebar />
    }


    return(
        <>
            <div className="mr-48" >
                <div className="w-44 h-screen z-10 fixed mt-14 border-r-2 ">
                    <ul>
                        <li className=" py-2">
                            <Link to="/">
                                <div className="bg-slate-200 mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                    <div className="flex flex-col pl-1 justify-center">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div>
                                    {isSidebarOpen && <span className="text-sm pl-3 font-semibold">Home</span>}
                                    {/* <span className="text-sm pl-3 font-semibold">Home</span> */}
                                </div>
                            </Link>
                        </li>
                        <li className=" py-1">
                            <Link to={'/results?search_query=trending'}>
                                <div className=" mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                    <div className="flex flex-col pl-1 justify-center">
                                        <FontAwesomeIcon icon={faFireFlameCurved} />
                                    </div>
                                    <span className="text-sm pl-3 font-semibold">Trending</span>
                                </div>
                            </Link>
                        </li>
                        <li className=" py-1">
                            <div className=" mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faMusic} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Music</span>
                            </div>
                        </li>
                        
                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faTv} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Live</span>
                            </div>
                        </li>
                        
                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Gaming</span>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">News</span>
                            </div>
                        </li>

                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faVolleyballBall} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Sports</span>
                            </div>
                        </li>

                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Learning</span>
                            </div>
                        </li>
                        <div className="mx-3 p-[1px] rounded-full bg-slate-300"></div>
                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer ">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faGear} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Settings</span>
                            </div>
                        </li>

                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer ">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faFlag} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Report History</span>
                            </div>
                        </li>

                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer ">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Help</span>
                            </div>
                        </li>

                        <li className=" py-1">
                            <div className="mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Send Feedback</span>
                            </div>
                        </li>

                        <div className="mx-3 p-[1px] rounded-full bg-slate-300"></div>

                    </ul>
                </div>
            </div>
        </>
    )
}

const ClosedSidebar = () => {
    return(
        <>
            <div className="mr-24" >
                <div className="w-14 h-screen z-10 fixed mt-14 border-r-2 ">
                    <ul>
                        <li className=" py-1 mt-1">
                            <Link to="/">
                                <div className=" flex justify-center">
                                    <div className="bg-slate-300 px-3 py-2 rounded-full">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className=" pt-2">
                            <Link to={'/results?search_query=trending'}>
                                <div className=" flex justify-center">
                                    <div className=" px-3 py-1 rounded-full">
                                        <FontAwesomeIcon icon={faFireFlameCurved} />
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faMusic} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faTv} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-2">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faHeadset} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faVolleyballBall} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-2">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                </div>
                            </div>
                        </li>
                        <div className="mx-3 p-[1px] rounded-full bg-slate-300"></div>
                        <li className=" pt-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faGear} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faFlag} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </div>
                            </div>
                        </li>
                        <li className=" py-1">
                            <div className=" flex justify-center">
                                <div className="px-3 py-1 rounded-full">
                                    <FontAwesomeIcon icon={faMessage} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Sidebar;
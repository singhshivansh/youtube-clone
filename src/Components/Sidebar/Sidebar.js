import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFireFlameCurved, faMusic, faTv, faHeadset, faNewspaper, faGear, faFlag, faLightbulb, faVolleyballBall , faQuestionCircle, faMessage} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isSidebarOpen = useSelector(store => store.navigation.isSidebarOpen);

    if(!isSidebarOpen)
        return;

    return(
        <>
            <div className="w-44 h-screen z-10 fixed mt-14 border-r-2">
                <ul>
                    <li className=" py-2">
                        <Link to="/">
                            <div className="bg-slate-200 mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                                <div className="flex flex-col pl-1 justify-center">
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <span className="text-sm pl-3 font-semibold">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className=" py-1">
                        <div className=" mx-2 py-2 rounded-lg flex justify-start hover:bg-slate-200 hover:rounded-lg cursor-pointer">
                            <div className="flex flex-col pl-1 justify-center">
                                <FontAwesomeIcon icon={faFireFlameCurved} />
                            </div>
                            <span className="text-sm pl-3 font-semibold">Trending</span>
                        </div>
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
                    <hr className="mx-3"></hr>
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

                    <hr className="mx-3"></hr>

                </ul>
            </div>
        </>
    )
}

export default Sidebar;
import React from "react";
import youtube_logo from "../../assets/images/youtube_logo.png";
import bell from "../../assets/images/bell.png";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../utils/slices/navigationSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(toggleSidebar());
    }
    return(<>
        <div className="fixed bg-white shadow-md  z-50 w-full px-5 flex justify-between items-center">
            <div className="">
                <div className="flex px-3">
                    <div className="flex flex-col justify-center">
                        <img className="h-7 cursor-pointer" onClick={()=>handleSidebar()}  src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-filled-tal-revivo.png" />
                    </div>
                        <div>
                            <img className="h-14 px-2" src={youtube_logo} />
                        </div>
                </div>
            </div>
            <div className="px-5 my-2 w-2/5">
                <SearchBar />
            </div>  
            <div className="">
                <img className="h-6" src={bell} />
            </div>
        </div>
    </>)
}


export default Header;
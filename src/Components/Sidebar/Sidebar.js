import { useSelector } from "react-redux";

const Sidebar = () => {

    const isSidebarOpen = useSelector(store => store.navigation.isSidebarOpen);

    if(!isSidebarOpen)
        return;

    return(
        <>
            <div className="w-40 h-screen  bg-slate-500 z-10">
                <ul>
                    <li className=" py-2">
                        Home
                    </li>
                    <li>
                        Shorts
                    </li>
                    <li>
                        Subscriptions
                    </li>
                    <hr></hr>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Home
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
import {Link, Outlet} from "react-router-dom";
import logo from '../assets/www.png'

const Layout = () => {
    return (
        <div className="bg-[#FFF]">
            <div className="container mx-auto ">
                {/*header*/}
                <div className="flex justify-between items-center h-32">
                    <Link to='/'>
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-40 "/>
                            <h1 className="text-4xl font-semibold text-[#314063]">Study</h1>
                        </div>
                    </Link>
                    <div className="flex gap-12 text-2xl items-center text-[#E0E0E0]">
                        <Link to="/">How it works?</Link>
                        <Link to="/">Features</Link>
                        <Link to="/">About us</Link>
                        <Link to="/login"
                              className="ml-8 py-3 px-8 border-2 border-[#31F7C4] text-[#06FE8E] font-medium">Login</Link>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
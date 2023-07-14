import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ProtectRoute = ({children}: { children: any }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    const rememberMe = JSON.parse(localStorage.getItem("rememberMe") || 'false');

    useEffect(() => {
        if (!token && !rememberMe) {
            return navigate("/login");
        }
    }, [navigate]);

    return children;
};

export default ProtectRoute;

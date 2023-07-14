import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const AuthCheck = ({children}: { children: any }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    const rememberMe = JSON.parse(localStorage.getItem("rememberMe") || 'false');

    useEffect(() => {
        if (token && (rememberMe == true || rememberMe == false)) {
            return navigate("/dashboard");
        }
    }, [navigate]);

    return children;
};

export default AuthCheck;

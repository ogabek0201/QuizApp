import axios, {AxiosInstance} from "axios";
import jwt_decode from "jwt-decode";

const axiosLogin: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});
const axiosRequest: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

axiosRequest.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            destroyToken();
        }
    }
);

interface shemaUser {
    role_id: string | number,
    id: string | number,
    email: string,
    fullName: string
}

function saveToken(access_token: string, rememberMe: boolean, user: shemaUser): void {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
    localStorage.setItem("user", JSON.stringify(user));
}

function getToken() {
    try {
        return jwt_decode(localStorage.getItem("access_token") as string);
    } catch (error) {
        console.log(error)
    }
}

function destroyToken(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("rememberMe");
    window.location.pathname = "/";
}

export {axiosLogin, axiosRequest, destroyToken, getToken, saveToken};

import React, {useEffect, useState} from "react";
import {Link, useRouteError} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    const token: string | null = localStorage.getItem("access_token");
    const rememberMe: boolean = JSON.parse(localStorage.getItem("rememberMe") || "{}");
    const [url, setUrl] = useState("");
    useEffect(() => {
        if (token && (rememberMe == true || rememberMe == false)) {
            setUrl("/dashboard");
        } else {
            setUrl("/");
        }
    }, []);
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h1>Oops!</h1>
                                <p>Sorry, an unexpected error has occurred.</p>
                                <p>
                                    <i>{error.statusText || error.message}</i>
                                </p>
                                <Link to={`${url}`} className="link_404">
                                    Go to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;
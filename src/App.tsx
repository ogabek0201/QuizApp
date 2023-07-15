import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Layout from "./layouts/Layout.tsx";
import Login from "./pages/Login/Login.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import LayoutDashboard from "./layouts/LayoutDashboard.tsx";
import Tests from "./pages/Tests/Tests.tsx";
import Result from "./pages/Result/Result.tsx";
import SignUp from "./pages/SignUp/SignUp.tsx";
import Questions from "./pages/Questions/Questions.tsx";
import Collections from "./pages/Collections/Collections.tsx";
import ResultUser from "./pages/ResultUser/ResultUser.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import AuthCheck from "./utils/AuthCheck.ts";
import ProtectRoute from "./utils/ProtectRoute.ts";

function App() {
    interface USER {
        index?: boolean,
        path?: string,
        element: JSX.Element
    }

    const user: USER[] = [
        {
            index: true,
            element: <Dashboard/>,
        },
        {
            path: 'tests',
            element: <Tests/>,
        },
        {
            path: 'result',
            element: <Result/>,
        },
    ]
    const admin: USER[] = [
        {
            index: true,
            element: <Dashboard/>,
        },
        {
            path: 'questions',
            element: <Questions/>,
        },
        {
            path: 'collections',
            element: <Collections/>,
        },
        {
            path: 'result-user',
            element: <ResultUser/>,
        },
    ]

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                }
            ],
            errorElement: <ErrorPage/>
        },
        {
            path: 'login',
            element: (
                <AuthCheck>
                    <Login/>)
                </AuthCheck>),
            errorElement: <ErrorPage/>,
        },
        {
            path: 'signup',
            element: (<AuthCheck>
                <SignUp/>
            </AuthCheck>),
            errorElement: <ErrorPage/>
        },
        {
            path: 'dashboard',
            element: (<ProtectRoute>
                <LayoutDashboard/>
            </ProtectRoute>),
            errorElement: <ErrorPage/>,
            children: JSON.parse(localStorage?.getItem('user') || '{}').role_id == 1 ? admin : user
        }
    ])
    return <RouterProvider router={router}/>
}

export default App
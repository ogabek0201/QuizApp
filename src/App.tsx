import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Layout from "./layouts/Layout.tsx";
import Login from "./pages/Login/Login.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import LayoutDashboard from "./layouts/LayoutDashboard.tsx";
import Tests from "./pages/Tests/Tests.tsx";
import Result from "./pages/Result/Result.tsx";
import Test from "./components/Test/Test.tsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                }
            ]
        },
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path:'dashboard',
            element:<LayoutDashboard />,
            children:[
                {
                    index: true,
                    element:<Dashboard />,
                },
                {
                    path:'tests',
                    element:<Test />,
                },
                {
                    path:'result',
                    element:<Result />,
                },
            ]
        }
    ])
    return <RouterProvider router={router}/>
}

export default App
import logo from '../assets/www.png'
import profile from '../assets/aaa.png'
import {Button, Image, Input, Menu} from "antd";
import {
    BlockOutlined,
    CodeSandboxOutlined,
    LogoutOutlined, ProfileOutlined, QuestionOutlined,
    RestOutlined,
    SearchOutlined,
    UngroupOutlined
} from "@ant-design/icons";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getToken} from "../utils/axiosRequest.ts";


function LayoutDashboard() {
    const navigate = useNavigate()
    const {pathname}:{pathname:string} = useLocation()
    enum items {
        "/dashboard" = '1',
        '/dashboard/tests' = '2',
        "/dashboard/result" = '3',
        "/dashboard/questions" = '2',
        "/dashboard/Collections" = '3',
        "/dashboard/result-user" = '4'
    }
    const [item, setItem] = useState(items[pathname])
    interface menu {
        readonly id: number | string,
        icon: any,
        label: string,
        path: string
    }

    const menuListForUser: menu[] = [
        {
            id: 1,
            icon: <BlockOutlined style={{fontSize: 30}}/>,
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            id: 2,
            icon: <CodeSandboxOutlined style={{fontSize: 30}}/>,
            label: "Tests",
            path: "tests",
        }, {
            id: 3,
            icon: <RestOutlined style={{fontSize: 30}}/>,
            label: "My Result",
            path: "result"
        },

    ]
    const menuListForAdmin: menu[] = [
        {
            id: 1,
            icon: <BlockOutlined style={{fontSize: 30}}/>,
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            id: 2,
            icon: <QuestionOutlined style={{fontSize: 30}}/>,
            label: "Questions",
            path: "questions"
        },
        {
            id: 3,
            icon: <UngroupOutlined style={{fontSize: 30}}/>,
            label: "Collections",
            path: "Collections",
        },
        {
            id: 4,
            icon: <ProfileOutlined style={{fontSize: 30}}/>,
            label: "Users Result",
            path: "result-user"
        },

    ];
    const switcher: menu[] = JSON.parse(localStorage?.getItem('user') || '{}').role_id == 1 ? menuListForAdmin : menuListForUser


    return (
        <>

            <div className="bg-[#FBF9F9] backdrop-blur-xl">
                <div className="fixed top-0 w-full z-50 !bg-inherit">
                    {/*header*/}
                    <div className="flex justify-between items-center px-10 ">
                        <div className="flex items-center gap-28">
                            <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-40 "/>
                                <h1 className="text-4xl font-semibold text-[#314063]">Study</h1>
                            </div>
                            <Input size="large" placeholder="Search..."
                                   rootClassName="w-80 h-16 rounded-[30px] text-xl text-[#696F79] shadow-[0px_15px_40px_5px_#EDEDED]"
                                   prefix={<SearchOutlined className="px-4 text-[#8692A6] flex  text-2xl"/>}/>
                        </div>
                        <div className="flex items-center gap-32 justify-between">
                            <Button
                                className="w-52 h-16 rounded-[30px] bg-[#8692A6] hover:!bg-[#a9b4c2] active:!bg-[#314063] text-xl"
                                type='primary'>Start Quiz</Button>
                            <div className="flex items-center gap-4">
                                <Image src={profile} className="rounded-full w-5 h-5"/>
                                <p className="text-xl text-[#696F79]">Oluwatobi...</p>
                            </div>
                        </div>

                    </div>
                    {/*sidebar && outlet*/}

                </div>
                <div className="">
                    {/*sidebar*/}
                    <div
                        className="w-80 flex flex-col justify-between items-center h-screen fixed top-0 -z-50 left-0 pt-16 pb-5">
                        <Menu theme="light" className="pt-20 space-y-2 px-5 !bg-inherit !border-r-0" mode="inline"
                              defaultSelectedKeys={[item]}>
                            {switcher.map((elem) => {
                                return (
                                    <Menu.Item key={elem.id} icon={elem.icon}
                                               className='font-semibold text-xl !py-8 !rounded-[30px] !px-10 flex gap-5 text-[#696F79] mx-20 active:!bg-[#314063] active:!text-white'
                                               onClick={(): void => {
                                                   navigate(elem.path)
                                                   setItem(items[pathname])
                                               }}
                                    >
                                        {elem.label}
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                        <Button icon={<LogoutOutlined className='text-[25px] text-bold'/>}
                                className="text-xl flex gap-5 items-center w-40 h-14 font-semibold text-[#696F79] rounded-[30px]"
                                type={"text"}>Log Out
                        </Button>
                    </div>
                </div>
                {/*outlet*/}
                <div className="ml-80 pt-40 h-screen">
                    <div className="w-[1180px] max-h-[861px] bg-white rounded-[30px] shadow-[0px_15px_40px_5px_#EDEDED] py-10 px-8 container mx-auto">
                    <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LayoutDashboard;
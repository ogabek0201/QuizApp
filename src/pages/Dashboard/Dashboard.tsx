import {CheckCircleFilled, FlagFilled, HourglassFilled} from "@ant-design/icons";

function Dashboard() {
    interface USER{
        first_name:string,
        last_name:string,
        passed:number,
        correct:number
    }

    let user:USER={
        first_name:'umed',
        last_name:"abdunazarzoda",
        correct:20,
        passed:58
    }

    return (
        <>
            <div className="container mx-auto">
                <div>
                    <div className="flex gap-10">
                    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*6Ho2vaOm23sUaDw1TRl3tQ.jpeg" className="w-[298px] h-[258] rounded-[30px] shadow-[0px_15px_40px_5px_#EDEDED]" alt=""/>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-[#696F79] text-4xl font-bold" >{user.last_name+" "+user.first_name}</h1>
                        <ul className="flex gap-8 mb-3">
                            <li className="flex gap-5 items-center">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0px_15px_40px_5px_#EDEDED] flex items-center justify-center">
                                    <FlagFilled className="text-[30px] text-[#696F79]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl text-[#696F79] font-bold">{user.passed}</h2>
                                    <p className="text-[#696F79] text-base">Quiz Passed</p>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0px_15px_40px_5px_#EDEDED] flex items-center justify-center">
                                    <HourglassFilled className="text-[30px] text-[#696F79]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl text-[#696F79] font-bold">27min</h2>
                                    <p className="text-[#696F79] text-base">Fastest Time</p>
                                </div>
                            </li>
                            <li className="flex gap-5 items-center">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-[0px_15px_40px_5px_#EDEDED] flex items-center justify-center">
                                    <CheckCircleFilled className="text-[30px] text-[#696F79]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl text-[#696F79] font-bold">{user.correct}</h2>
                                    <p className="text-[#696F79] text-base">Correct Answers</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
import {Link, useNavigate} from "react-router-dom";
import www from "../../assets/www.png";
import {useForm} from "react-hook-form";
import {axiosLogin} from "../../utils/axiosRequest.ts";

const SignUp = () => {
    const navigate = useNavigate()

    interface registerForm {
        fullName: string,
        role_id: number,
        email: string,
        password: string | number
    }

    const {register, handleSubmit} = useForm<registerForm>()

    async function onSubmit(datas: registerForm) {
        datas.role_id = 2
        try {
            const {data} = await axiosLogin.post('register', datas)
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex h-screen justify-center items-center">
                    <div className="basis-[50%] flex flex-col items-center">

                        <h1 className="text-center my-10">
                            <span className="text-4xl">Welcome back!</span><br/>
                            Please login/Signup to your account.
                        </h1>
                        <form className="flex flex-col relative" onSubmit={handleSubmit(onSubmit)}>
                            <label
                                className="absolute top-2 left-4 text-[15px] font-normal text-[#0000009C]"
                                htmlFor="fullname"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                className="border border-[#C1BBBB] pt-8 pb-1 px-4 font-medium text-[#FCC822] text-[16px] w-[345px] outline-0"
                                {...register('fullName',)}
                            /><label
                            className="absolute top-[70px] left-4 text-[15px] font-normal text-[#0000009C]"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                            <input
                                type="email"
                                id="email"
                                className="border border-[#C1BBBB] pt-8 pb-1 px-4 font-medium text-[#FCC822] text-[16px] w-[345px] outline-0"
                                {...register('email',)}
                            />
                            <label
                                htmlFor="password"
                                className="absolute top-[130px] left-4  text-[15px] font-normal text-[#0000009C]"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="border border-[#C1BBBB] pt-8 pb-1 px-4 font-medium text-[#FCC822] text-[16px] w-[345px] outline-0"
                                {...register('password',)}
                                id="password"
                            />
                            <div className="flex mt-12 gap-8">
                                <button type="submit"
                                        className="text-[18px] font-medium py-2 px-4 bg-gradient-to-r from-[#01FF88] to-[#40F4D7] text-white shadow-lg shadow-[#40F4D7]">SignUp
                                </button>
                                <Link
                                    to="/login"
                                    className="ml-4 text-[#06FE8E] font-medium text-[18px] px-5 py-2 border border-[#31F7C4]"
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                        <div className="flex mt-12 gap-6">
                            <p className="text-[#0000009C] text-[15px] font-normal">Or login with</p>
                            <Link to='#' className="text-[#31F7C4] font-bold text-[15px]">Facebook</Link>
                            <Link to='#' className="text-[#31F7C4] font-bold text-[15px]">Google</Link>
                        </div>
                    </div>
                    <div
                        className="basis-[50%] bg-gradient-to-bl from-[#FFFFFF69] to-[#F3F3F369] h-full flex flex-col items-center justify-center">
                        <img src={www} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
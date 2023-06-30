import home_img from '../../assets/home.png'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div>
                    <h1 className='text-6xl text-[#333] font-medium w-96'>Learn<br/>
                        new concepts
                        each minute</h1>
                    <p className="text-2xl mt-8 mb-16 pl-5 border-l-2 border-[#01FF88] text-[#828282]">We help you prepare for exams and quizes</p>
                    <Link to="/login" className="py-4 px-8 bg-gradient-to-r from-[#1884FF] to-[#49CDFF] text-2xl font-medium text-[#FFF]">Start solving</Link>
                </div>
                <img src={home_img} alt="" className='w-1/2'/>
            </div>
        </>
    );
};

export default Home;
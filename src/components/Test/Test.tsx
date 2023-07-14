import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {useRef, useState} from "react";
import type {RadioChangeEvent} from "antd";
import {Button, Radio} from "antd";

const Test = () => {
    let [ans,setAns]=useState([])
    interface Ques {
        readonly id: number | string,
        question: string,
    }

    interface Ans {
        readonly questionsID: number | string,
        readonly id: number | string,
        answer: string,
        correct: boolean,
    }

    const questions: Ques[] = [
        {id: 1, question: 'what is JS?'},
        {id: 2, question: 'what is c++?'},
        {id: 3, question: 'what is c++?'},
    ]

    const answers: Ans[] = [
        {questionsID: 1, answer: 'JavaScript', correct: true, id: 1},
        {questionsID: 1, answer: 'Mocha', correct: false, id: 2},
        {questionsID: 1, answer: 'live', correct: false, id: 3},
        {questionsID: 1, answer: 'salom', correct: false, id: 4},
        {questionsID: 2, answer: 'cpp', correct: false, id: 5},
        {questionsID: 2, answer: 'Cplusplus', correct: false, id: 6},
        {questionsID: 2, answer: 'plusplusC', correct: false, id: 7},
        {questionsID: 2, answer: 'salom', correct: true, id: 8},
        {questionsID: 3, answer: 'salom', correct: true, id: 9},
    ]

    const pagination = {
        clickable: false,
        renderBullet: function (index: number, className: string): string {
            return '<p class="' + className + " w-10 h-10 inline-flex flex-col items-center justify-center mt-20 text-xl text-white font-bold " + '">' + (index + 1) + "</p>";
        },
    };

    const [value, setValue] = useState('');

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    function saveResult(){
        setAns((prevState)=>{
            prevState.push(value)
            return prevState
        })
        console.log(ans)
    }

    function onSub(){
        setAns((prevState)=>{
            prevState.push(value)
            return prevState
        })
       let res= ans.map(e=>{
            return answers.find(el=>{
                return el.id===e}).correct
        }).filter(Boolean).length*4
        console.log(res)
    }
    interface refs{
        current:string
    }
    let use:refs=useRef()
    return (
        <div className='h-[500px]'>
            <div className="container mx-auto">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                    allowTouchMove={false}
                    ref={use}
                >
                    {questions.map((elem, ind) =>
                        <SwiperSlide>
                            <div className="mt-10">
                                <div className="container mx-auto">
                                    <div className="w-[550px] mx-auto p-6 mb-16">
                                        <h1 className="text-center text-4xl font-bold text-[#696F79]">{elem.question}</h1>
                                        <p className="mt-5 text-[#134E6FA1] font-bold text-2xl">Answers:</p>
                                        <Radio.Group onChange={onChange} value={value}
                                                     className="flex flex-col gap-3 my-5 ml-3">
                                            {answers.filter(e => e.questionsID == elem.id).map(e =>
                                                <Radio value={e.id}>{e.answer}</Radio>
                                            )}
                                        </Radio.Group>
                                        <div className="flex justify-end gap-5">
                                            {
                                                questions.length - 1 == ind ?
                                                    <Button type={"primary"}
                                                            className="bg-[#8692A6] hover:!bg-[#a9b4c2] active:!bg-[#314063] font-bold text-base"
                                                    onClick={onSub}
                                                    >Submit</Button> :

                                                    <Button className="font-bold text-base" onClick={()=>{
                                                        use.current.swiper.slideNext(0, true)
                                                    saveResult()
                                                    }}>Next</Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default Test;
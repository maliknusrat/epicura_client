import "../../../App.css"
import { AiOutlineCaretRight } from "react-icons/ai";
import back from "../../../assets/fish.jpg"
import front from "../../../assets/cheff.jpg"
import { Image } from 'antd';
const Introduction = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto my-20">
                <div className="font-play space-y-2 text-start">
                    <h2 className="text-base text-[#D7A747]">Introduction</h2>
                    <h2 className="text-5xl font-bold">To Take Healthy Food.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <div className="font-play py-6">
                        <h1 className="text-justify px-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                        <div className="flex space-y-3 items-center gap-5">
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <AiOutlineCaretRight className="text-[#D7A747]"></AiOutlineCaretRight>
                                    <p>Delicious Food</p>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                        <button className="btn btn-outline rounded-none my-5 border-[#D7A747] btn-xs sm:btn-sm md:btn-md lg:btn-lg">Discover More</button>
                        </div>


                    </div>

                    <div className="hidden md:block">
                            <div className='relative '>
                                <Image className=''
                                    width={450}
                                    src={front}
                                />
                                <div className='absolute -bottom-9 -left-24'>
                                    <Image className=''
                                        width={300}
                                        src={back}
                                    />
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Introduction;
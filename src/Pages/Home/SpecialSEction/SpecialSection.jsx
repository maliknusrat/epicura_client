import img1 from '../../../assets/bg-1.jpg'
import chic from "../../../assets/chicken.jpeg"
import soup from "../../../assets/soup.jpg"
import burger from "../../../assets/burger.jpg"
import pizza from "../../../assets/pizza.jpeg"
import pasta from "../../../assets/pasta.jpeg"
import drinks from "../../../assets/drinks.jpeg"
import kabab from "../../../assets/kabab.jpeg"
import '../../../App.css'
import { Image } from 'antd';

const SpecialSection = () => {
    return (
        <div className="hero min-h-screen my-20" style={{
            backgroundImage: `url(${img1})`,
        }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-5xl">
                    <h1 className="mb-5 font text-6xl pb-5 font-black">Special Combo Offer</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className=' border-dotted hidden:border-b-2 lg:border-r-2 border-[#D7A747] '>
                            <div className='flex items-center mb-6 mr-5 justify-center gap-9'>
                                <div>
                                    <div className='relative '>
                                        <Image className='rounded-full'
                                            width={150}
                                            src={chic}
                                        />
                                        <div className='absolute bottom-0 -right-4'>
                                            <Image className=' rounded-full'
                                                width={80}
                                                src={drinks}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-start font-play'>
                                    <p className='font-bold text-3xl text-[#D7A747]'>$60</p>
                                    <p className='text-2xl font-medium py-1'>Chicken With Drinks</p>
                                    <p className=''>It's So teasty and Delicious for creating our coustomer. So visit our restaurant </p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-9'>
                                <div>
                                    <div className='relative '>
                                        <Image className='rounded-full'
                                            width={150}
                                            src={soup}
                                        />
                                        <div className='absolute bottom-0 -right-4'>
                                            <Image className=' rounded-full'
                                                width={80}
                                                src={kabab}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-start font-play'>
                                    <p className='font-bold text-3xl text-[#D7A747]'>$90</p>
                                    <p className='text-2xl font-medium py-1'>Soup With Kabab</p>
                                    <p className=''>It's So teasty and Delicious for creating our coustomer. So visit our restaurant </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center justify-center mb-[20px] gap-9'>
                                <div>
                                    <div className='relative '>
                                        <Image className='rounded-full'
                                            width={150}
                                            src={pizza}
                                        />
                                        <div className='absolute bottom-0 -right-4'>
                                            <Image className=' rounded-full'
                                                width={80}
                                                src={pasta}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-start font-play'>
                                    <p className='font-bold text-3xl text-[#D7A747]'>$80</p>
                                    <p className='text-2xl font-medium py-1'>Pizza With Pasta</p>
                                    <p className=''>It's So teasty and Delicious for creating our coustomer. So visit our restaurant </p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center gap-9'>
                                <div>
                                    <div className='relative '>
                                        <Image className='rounded-full'
                                            width={150}
                                            src={burger}
                                        />
                                        <div className='absolute bottom-0 -right-4'>
                                            <Image className=' rounded-full'
                                                width={80}
                                                src={drinks}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-start font-play'>
                                    <p className='font-bold text-3xl text-[#D7A747]'>$40</p>
                                    <p className='text-2xl font-medium py-1'>Burger With Drinks</p>
                                    <p className=''>It's So teasty and Delicious for creating our coustomer. So visit our restaurant </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpecialSection;
import img from "../../assets/Banner.jpg"
import '../../App.css'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})`,
         }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg ">
                    <h1 className="mb-5 font text-4xl font-black">Hello there</h1>
                    <p className="text-5xl font-play font-bold mb-5">Find Your Best Healthy & Tasty Food.</p>
                    <Link to='/allFood' className="btn btn-outline rounded-none border-none bg-[#2D4739] text-white">Discover More</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
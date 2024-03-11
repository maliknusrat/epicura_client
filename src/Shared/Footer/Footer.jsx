import img1 from "../../assets/bg-1.jpg"
import '../../App.css'
import logo from "../../assets/logo.png"


const Footer = () => {
    return (
        <div className="hero min-h-[400px] mt-20" style={{
            backgroundImage: `url(${img1})`,
        }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-white">
                <div className="max-w-5xl">
                    <div className='grid  grid-cols-1 md:grid-cols-3 gap-4 place-items-center'>
                        <div className="text-start  font-play">
                          <h2 className="text-2xl text-center font-semibold py-5">Our Facilities</h2>
                          <div className="flex items-start justify-center gap-7">
                            <div className="space-y-2">
                                <p>Indian Menu</p>
                                <p>Menu Item</p>
                                <p>Private Event</p>
                                <p>Italian Menu</p>
                                <p>Best Offer</p>
                            </div>
                            <div className="space-y-2">
                                <p>Popular Item</p>
                                <p>Reqular Menu</p>
                                <p>New Food</p>
                                <p>Special offer</p>
                            </div>
                          </div>
                        </div>

                        <div className="border bg-[#BCB382] bg-opacity-80 border-dashed rounded-full h-[300px] flex flex-col items-center justify-center p-8 border-[#D7A747]">
                            <div className="flex items-center justify-center gap-1"> <img className="w-[100px]" src={logo} alt="" />
                                <h2 className="text-3xl font-play font-bold"><span className="text-[#09814A]">Epi</span>curea</h2></div>
                            <h2 className="text-2xl font-play font-bold">Established . 2024</h2>
                        </div>

                        <div className="space-y-2">
                         <h2 className="font-play text-2xl font-bold">Address Info</h2>
                         <p><span className="font-semibold text-[#D7A747]">Phone: </span>017003245646</p>
                         <p><span className="font-semibold text-[#D7A747]">Email: </span>info@gmail.com</p>
                         <p><span className="font-semibold text-[#D7A747]">Location: </span>Mirpur 10,House-190 <br />Road-02,Dhaka</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
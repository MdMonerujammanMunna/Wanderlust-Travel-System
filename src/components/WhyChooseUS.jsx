
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const WhyChooseUS = () => {
    return (
        <>
            <div className="bg-[#EDFCFF] py-25 px-10 text-center">
                <h1 className='text-6xl font-medium text-[#0C0B0B]'>Why Choose Wanderlust</h1>
                <p className='text-[18px] text-[#6C696D] mt-2'>Your trusted partner for exceptional travel experiences</p>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="bg-white text-left p-10 rounded-lg shadow-md space-y-4">
                        <IoShieldCheckmarkSharp className="font-bold text-5xl text-[#15A1BF] mb-3" />
                        <h1 className='text-3xl'>Safe <span className='font-bold'>&</span> Secure</h1>
                        <p className=' text-[#6C696D]'>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                    </div>
                    <div className="bg-white text-left p-10 rounded-lg shadow-md space-y-4">
                        <FaMap className="font-bold text-5xl text-[#15A1BF] mb-3" />
                        <h1 className='text-3xl'>Expert Guides</h1>
                        <p className=' text-[#6C696D]'>Local experts who bring destinations to life with authentic cultural insights.</p>
                    </div>
                    <div className="bg-white text-left p-10 rounded-lg shadow-md space-y-4">
                        <MdOutlineSupportAgent className="font-bold text-5xl text-[#15A1BF] mb-3" />
                        <h1 className='text-3xl'>24/7 Support</h1>
                        <p className=' text-[#6C696D]'>Round-the-clock customer service to assist you wherever your journey takes you.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUS;
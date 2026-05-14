import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";

import Link from "next/link";
import { Button, Card } from "@heroui/react";
const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params

    const MainData = await fetch(`http://localhost:5000/AllData/${id}`)
    const singledata = await MainData.json()
    const { destinationName, country, category, price, duration, departureDate, description, imageUrl, _id, highlights } = singledata
    return (
        <>
            <div className="px-10 py-10">
                <div className="py-10 flex items-center justify-between">
                    <Link href="/Destination" className="flex items-center gap-2 text-xl text-[#6C696D]">
                        <IoMdArrowRoundBack />
                        <span>Back to Destinations</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Button className=" flex items-center text-xl">
                            <RiEdit2Fill className="h-6 w-6" />
                            <span>Edit</span>
                        </Button>
                        <Button variant="danger" className="flex items-center text-xl">
                            <MdDeleteSweep className="h-6 w-6" />
                            <span>Cancel</span>
                        </Button>
                    </div>
                </div>
                <div className="relative w-full h-150">
                    <Image src={imageUrl} alt="Not Found" fill className="rounded-2xl"></Image>
                </div>
                <hr className=" my-10" />
                <div className="flex items-center gap-10">
                    {/* left side desing */}
                    <div className="">
                        <div className="flex items-center gap-2 text-[#6C696D]">
                            <FaLocationDot />
                            <span className="font-medium">{country}</span>
                        </div>
                        <h1 className="mt-2 text-6xl font-medium">{destinationName}</h1>

                        <div className="flex gap-2  items-center text-[#6C696D] font-medium mt-5">
                            <IoCalendarNumberSharp />
                            <span>{duration}</span>
                        </div>

                        <div className="mt-10">
                            <h1 className="text-3xl font-medium mb-5">Overview</h1>
                            <p className="text-[#6C696D] text-[18px]">{description}</p>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-3xl font-medium mb-5">Highlights</h1>
                            <p className="text-[#6C696D] text-[18px]">{description}</p>
                            <div className="mt-5 text-[#6C696D] grid md:grid-cols-2 gap-4 ">
                                {highlights.map((highlight, index) =>
                                    <div key={index} className="gap-4 flex items-center text-xl font-bold">
                                        <PiArrowCircleUpRightFill className="text-green-500" />
                                        <h1 className="text-[18px] font-semibold">{highlight}</h1>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Right side design */}
                  
                </div>
            </div >
        </>
    );
};

export default DestinationDetailsPage;
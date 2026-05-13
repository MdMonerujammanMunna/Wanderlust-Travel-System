import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { TiArrowLeft } from "react-icons/ti";


import { Card, Link } from "@heroui/react";
import Image from "next/image";

const CardDesign = ({ singledata }) => {
    const { destinationName, country, category, price, duration, departureDate, description, imageUrl, _id } = singledata
    return (
        <>
            <Card className="shadow-2xl rounded-xl m-0 p-0">
                <div className="relative w-full h-50">
                    <Image src={imageUrl} fill alt="not found" className="rounded-t-xl"></Image>
                </div>
                <Card.Header className="p-4 space-y-2">
                    <div className="flex gap-2  items-center text-[#6C696D] font-medium">
                        <FaLocationDot />
                        <span>{country}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <Card.Title className="text-2xl font-medium">{destinationName}</Card.Title>
                        <div className="text-3xl font-semibold"><p>${price}/<span className="text-[#6C696D] font-normal text-[16px]">{category}</span></p></div>
                    </div>
                    <div className="flex gap-2  items-center text-[#6C696D] font-medium">
                        <IoCalendarNumberSharp />
                        <span>{duration}</span>
                    </div>

                    <Link className="mt-3 text-[#15A1BF] flex items-center gap-2 underline-[#15A1BF]"
                        href={`/Destination/${_id}`}
                        rel="noopener noreferrer"
                    >
                        <span>BOOK NOW</span>
                        <TiArrowLeft className="text-2xl font-bold -rotate-225" />
                    </Link>
                </Card.Header>
            </Card>
        </>
    );
};

export default CardDesign;
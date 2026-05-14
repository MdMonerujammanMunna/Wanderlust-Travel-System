import { Button, Card } from "@heroui/react";
import Link from "next/link";

import { FaArrowRightToBracket } from "react-icons/fa6";
import { PiArrowCircleUpRightFill } from "react-icons/pi";
const DetailsRightSide = ({ singledata }) => {
    const { price, departureDate } = singledata
    return (
        <>
            <div className="col-span-2">
                <Card className="shadow-2xl p-5 rounded-2xl text-[#6C696D] font-medium ">
                    <p>Starting from</p>
                    <h1 className="text-4xl text-[#15A1BF] font-bold">${price}</h1>
                    <p>per person</p>

                    <div className="p-4 w-full bg-[#F8FAFC] text-[18px] mt-13">
                        {departureDate}
                    </div>
                    <hr className=" my-5" />
                    <Link href="">
                        <Button className="w-full bg-[#15A1BF]">
                            BOOK NOW
                            <FaArrowRightToBracket />
                        </Button>
                    </Link>
                    <div className="grid gap-4 mt-5">
                        <div className="gap-2 flex items-center ">
                            <PiArrowCircleUpRightFill className="text-xl font-bold text-green-500" />
                            <h1 className="">Free cancellation up to 7 days</h1>
                        </div>
                        <div className="gap-2 flex items-center ">
                            <PiArrowCircleUpRightFill className="text-xl font-bold text-green-500" />
                            <h1 className="">Travel insurance included</h1>
                        </div>
                        <div className="gap-2 flex items-center ">
                            <PiArrowCircleUpRightFill className="text-xl font-bold text-green-500" />
                            <h1 className="">24/7 customer support</h1>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
};

export default DetailsRightSide;
import { Card } from "@heroui/react";
import { FaPlane } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";

const ProfileLeftSide = () => {
    return (
        <>
            <div className="">
                <h1 className="text-2xl font-semibold mb-4">Travel Statistics</h1>
                {/* Card section  */}
                <div className="grid gap-4 lg:grid-cols-2 ">
                    {/* 1 */}
                    <Card className="p-7 border rounded-xl border-gray-300">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <Card.Title className="text-[#6C696D] ">Total Bookings</Card.Title>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="p-3 bg-[#EDFCFF] rounded-full">
                                <FaPlane className="text-4xl text-[#15A1BF] -rotate-45" />
                            </div>
                        </div>

                    </Card>
                    {/* 2 */}
                    <Card className="p-7 border rounded-xl border-gray-300">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <Card.Title className="text-[#6C696D] ">Countries Visited</Card.Title>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="p-3 bg-[#E8F9EE] rounded-full">
                                <GiWorld className="text-4xl text-[#1E9E35] " />
                            </div>
                        </div>

                    </Card>
                    {/* 3 */}
                    <Card className="p-7 border rounded-xl border-gray-300">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <Card.Title className="text-[#6C696D] ">Upcoming Trips</Card.Title>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="p-3 bg-[#FFF1E2] rounded-full">
                                <IoTrendingUpOutline className="text-4xl text-[#FF8A0D]" />
                            </div>
                        </div>

                    </Card>
                    {/* 4 */}
                    <Card className="p-7 border rounded-xl border-gray-300">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <Card.Title className="text-[#6C696D] ">Total Spent</Card.Title>
                                <p className="text-2xl font-bold">12</p>
                            </div>
                            <div className="p-3 bg-[#FEEAFF] rounded-full">
                                <MdOutlineAttachMoney className="text-4xl text-[#DC24E5]" />
                            </div>
                        </div>

                    </Card>
                </div>
            </div>
        </>
    );
};

export default ProfileLeftSide;
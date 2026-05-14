
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";



import Link from "next/link";
import { Button } from "@heroui/react";
import { redirect } from "next/dist/server/api-utils";
import { DeleteModal } from "./DeleteModal";

const DetailsButton = ({ singledata }) => {
    const { _id } = singledata
    return (
        <>
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
                    <DeleteModal singledata={singledata} />
                </div>
            </div>
        </>
    );
};

export default DetailsButton;
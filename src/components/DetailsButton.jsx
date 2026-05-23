
import { IoMdArrowRoundBack } from "react-icons/io";




import Link from "next/link";
import { DeleteModal } from "./DeleteModal";
import { EditModal } from "./EditModal";

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
                    <EditModal />
                    <DeleteModal singledata={singledata} />
                </div>
            </div>
        </>
    );
};

export default DetailsButton;
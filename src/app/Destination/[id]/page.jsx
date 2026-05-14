import Image from "next/image";

import { FaStar } from "react-icons/fa6";
import DetailsLeftSide from "@/components/DetailsLeftSide";
import DetailsRightSide from "@/components/DetailsRightSide";
import DetailsButton from "@/components/DetailsButton";
const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params

    const MainData = await fetch(`http://localhost:5000/AllData/${id}`)
    const singledata = await MainData.json()
    const { imageUrl } = singledata
    return (
        <>
            <div className="px-10 py-10">
                {/* Button side design */}
                <DetailsButton singledata={singledata} />

                <div className="relative w-full h-150">
                    <Image src={imageUrl} alt="Not Found" fill className="rounded-2xl"></Image>
                </div>

                <hr className=" my-10" />

                <div className="grid grid-cols-1 lg:grid-cols-5 items-start gap-10">
                    {/* left side desing */}
                    <DetailsLeftSide singledata={singledata} />
                    {/* Right side design */}
                    <DetailsRightSide singledata={singledata} />
                </div>
            </div >
        </>
    );
};

export default DestinationDetailsPage;
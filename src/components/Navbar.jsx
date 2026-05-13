import Image from "next/image";
import LogoImage from "../../public/assets/Wanderlast.png"
import Link from "next/link";
import { MdPerson } from "react-icons/md";
const NavigationBar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-10 py-4 font-medium">
                <ul className="flex items-center gap-5">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Destination">Destinations</Link></li>
                    <li><Link href="/">My Bookings</Link></li>
                    <li><Link href="/">Admin</Link></li>
                    <li><Link href="/AddDestinationPage">Add Destination</Link></li>
                </ul>
                <div className="">
                    <Image src={LogoImage} alt="Not Found" width={80} height={80}></Image>
                </div>
                <ul className="flex items-center gap-5">
                    <li><Link href="/" className="flex items-center gap-1"><MdPerson /> Profile</Link></li>
                    <li><Link href="/">Login</Link></li>
                    <li><Link href="/">Sign Up</Link></li>
                </ul>
            </div>
        </>
    );
};

export default NavigationBar;
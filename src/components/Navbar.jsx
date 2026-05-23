"use client"
import Image from "next/image";
import LogoImage from "../../public/assets/Wanderlast.png"
import Link from "next/link";
import { MdPerson } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const NavigationBar = () => {
    const {
        data: session,
        isPending,
    } = authClient.useSession()

    const user = session?.user

    const LogOUt = async () => {
        await authClient.signOut({
        });
    }
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
                    {
                        !user ?

                            <>
                                <li><Link href="/profilePage" className="flex items-center gap-1"><MdPerson /> Profile</Link></li>
                                <li><Link href="/LoginPage">Login</Link></li>
                                <li><Link href="/SignUp">Sign Up</Link></li>
                            </>
                            :
                            <>
                                <Avatar>
                                    <Avatar.Image alt="Not Found" src={user?.image} />
                                    <Avatar.Fallback>{user.name.toUpperCase().slice(0, 2)}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={LogOUt} variant="danger">Log Out</Button>
                            </>
                    }
                </ul>
            </div >
        </>
    );
};

export default NavigationBar;
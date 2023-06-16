import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg"
import {Button} from "@/components/button";

export const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-6">
                <Link href="/" className="flex justify-center items-center">
                    <Image src={Logo} alt="Car Hub Logo" width={118} height={18} className="object-contain"/>
                </Link>

                <Button title="Sign in" btnType="button" containerStyle="text-primary-blue rounded-full bg-white min-w-[130px] "/>
            </nav>
        </header>
    )
}
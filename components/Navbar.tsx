import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Link href="/">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={46}
                        height={44}
                    />
                </Link>
                <div className="flex items-center gap-8">
                    <NavItems/>
                    <p>Sign In</p>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

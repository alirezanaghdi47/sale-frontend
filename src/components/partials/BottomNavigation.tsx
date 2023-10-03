'use client';

// libraries
import Link from "next/link";

// utils
import {appbarLinkList, bottomNavigationLinkList} from "@/utils/constants";

const NavbarItem = ({navbarItem}) => {
    return (
        <li className="col-span-3 flex justify-center items-center p-2">
            <Link
                href={`/${navbarItem.href}`}
                className="flex flex-col justify-center items-center gap-y-2"
            >
                <span className="text-gray">
                    {navbarItem.icon}
                </span>
                <span className="text-gray text-sm font-bold whitespace-nowrap">
                    {navbarItem.title}
                </span>
            </Link>
        </li>
    )
}

const Navbar = () => {

    return (
        <ul className="grid grid-cols-12 gap-4 w-full">

            {
                bottomNavigationLinkList.map(bottomNavigationLinkItem =>
                    <NavbarItem
                        key={bottomNavigationLinkItem.id}
                        navbarItem={bottomNavigationLinkItem}
                    />
                )
            }

        </ul>
    )
}

const BottomNavigation = () => {

    return (
        <nav
            className="fixed bottom-0 left-0 z-20 flex md:hidden justify-center items-center gap-x-4 w-full h-[70px] bg-light shadow-3xl">

            <div className='flex justify-center items-center gap-x-4 w-full max-w-[1200px] h-full p-4'>
                <Navbar/>
            </div>

        </nav>
    )
}

export default BottomNavigation;
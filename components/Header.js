import React from "react";
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    PaperAirplaneIcon,
    UserGroupIcon,
    HeartIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <header className="shadow-sm  border-b bg-white sticky top-0 z-0">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                <div className="relative hidden lg:inline-grid w-24 pointer">
                    {/*left*/}
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        {/*mid (search)*/}
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            className="bg-gray-50 block w-full pl-10 sm:text-sm
                            border-gray-300 focus:ring-black focus:border-black rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end space-x-4">
                    {/*right*/}
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img
                        className=" h-10 rounded-full cursor-pointer"
                        src="https://media.licdn.com/dms/image/C5603AQFQ9muzujqwEg/profile-displayphoto-shrink_200_200/0/1587445356674?e=1680739200&v=beta&t=7KpgCy6EytJrtaaWA9Kea2vbfSSyNMe2Z3FpcrHS-4Q"
                        alt="profilepic"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;

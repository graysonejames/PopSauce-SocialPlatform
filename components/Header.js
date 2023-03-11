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
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <header className="shadow-sm  border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                <div className="relative hidden lg:inline-grid w-24 pointer">
                    {/* left*/}
                    <Image
                        onClick={() => router.push("/")}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAACOCAMAAADTsZk7AAAAM1BMVEX////MzMzKysr29vbPz8/f39/g4OD7+/vU1NT4+Pjq6urc3Nzj4+Py8vLR0dHt7e3ExMQp8n/3AAAHTUlEQVR4nO2d63qjOgxFg7nZ2EDf/2lPsAz4IkHahjAzZ68f800TA/JGluVb+3gAAAAAAAAAAAAAAAAAAAD828wWvJs509gp8G5crnHVgPdS5Rr3NXg3/YWxHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9r+t6M82j617Yr9p6TIvU812el3s0Lhl2AcV3XtcePNXOrK7+zudLtYA7L9uPgrJ6eaNu6uWYLjYOdaKt0o9188vDFQMc8NLN86DjW54+z66y1ExlmC8PYq1ve+m8zNktVj3Tr3VSpakVVUyuXrjvdpIW1KyQcbbMXeZbRw5GB9fJ2q5H5IrXccrvdq3CkoF98pIofOtnkli27WT4/kPBD6mZ55IHGroqN8waqgXe90aq8bFU1mTPUtiijpgOH8QbmN/FfTInltnjyQhDyqXGBslGt29LwZ4nPaNzbVVc1Tc0moWUu6Pdarl60oNNS87QWqaZpc65GduXfabz7cWTX+lS93/VGjfugiHbeIfq5beiDqbhinla9tO2GJ67Ty1tJD07MVKixFIXrITiY6g4NfFXjSWckftzSCYN+dOGpzXYzr3GTXTx9QmOjl0erOGDWXVA9u2QIWukhinPP2qRhYKZCcSycQ33zQyyJgS9qXJw22gzRmVsO3ldUu/7sNbbC1b/lUGNLsqXRdw7hIvkwSDwVSULy80ilssAQArTgNNdo/DBk73rf2zR2qhTzsaQiXvpYqaC72OCJEHkKMVu6mu9IL9KY3vd2wV0ak5ZTWXUKqlFINg3nnwWuEnTwniyE5Ks0pka6ynqXxtRTc191Kq2QLRxbfBRfEf9NwyTBF2o8xL3eTRqPcldkfD/VrB4+MwGawdeDT4UH2ZEv09hbrWLbPq+xb8BljuZxieNaLtEo8RGmZb8K+ato4BUaj3+Axmlyk0K9Vxhe1OqVYBx8VRjR+YbL5vzX+vH6Wu/RmJoSGyIfwXVDsKAx0umTaJAgfEmpFPdGr43H6yj0Ho07sfUuUGrhjSb7T9K2p4rTkQgPHde4MPCqvOLm3C1JbQqM2jpEn+KJDr9xUsxJ0f/S/HhLZW7R2KcOsts9ps15KQc67fF8OJaL+YbBZW9XaayT7uYWjakG8qTI7ubeA/Xp4gIVEzU2e/BhDKysK7BNoXFlh5T120Lj0c/EbNknaazn9Oo3TdGLGtMgT44Afvzrle1ecwGvsRVfRV8JyQlpXJUT6PRxNrcpTLJnGpsuH/RQv33y+2x+iqQxtV35Te7ea5mMoB4j6ObH8Z2yQa5WQWOB4/njVONK069bCmsiKm5U3Pzxn6Oxn5rP8+hk4YdSjj9A44QmWQT7CzTO/diWpv5O42YqaBiN82KyxlkHQhpnV58Oq17kpxp3W3jlxPuBxl4yKR43Y18wfjevWOMt/TdfMz207neIfZ43RO7zdslapjNbY0WkcXecfhznFW/J3arWZwvOhlXguHJ/ZO62p880euDFW4QNFT/J3cZP5scDLRZEN71xDCKPkKutadMyEy9epDGNvsXgM3x0nEfztpGmN46luQkEj3c7am00SOb7h0jjo2JHj7tozTSLFjfOCSkpfrb7MMlM8tuINKZ5fakafgjCzqReNJbOuuB7NKZOT/K7eJpMXpOKNQ7FhPvRTOoH54+HdEL2pjn65iBYJFPqFGnZ0B1rPKsDFSi7FQ28YE5IJXnTTRq3Ujb1SKfo1xVPrjuLNaa1Jj57Iys+up7nW+JW/iaN60rUhJZpNgOp3XFLHInGnUquitHiW7pMY5eoetvav7RYTGOyfYWZMnyux0o0DjMPjFzDwXLqVRrPSb5+l8a1sDOlL7ZThG1CpUiJxrSazYxDZnrQZ/cJ1cnk7W17sci98tZNGw3T3pB2bSmdj9NSjR9hi2JWKryhz+53Cx+tjvIBjYU0OMz4JeGCVhBUNiSz657X9ONM47BnK91z6mgCTRpSXrZmmsj6AY1dtkYTNrj26553Z+gtmFoHj809n+LAIr4bjen73ph6oKASVXykiYKnK9P1vRkqlRdiDHx1/3G+1jQEPxXX/pP9Fbq4+nSV8iUoLBULOcGrVpGXwzbLEtq6CV6XdR7WuXSlmmWr9bQeDEnkq8NREDUtK3TddjJEng7/3j76vB5f5BucxnW8UM6uNb3rQAi/zLC33Ei6/bBHx8UWw5y5KF3UbFPL0Q2bg7r87qyCkjV+xLNe7FmFo/XM73Cm8SJK8nxVFX9/ZGVsp+zQzdOnbX7ua9BZmak8+pQbeInGNClL/79U45FZ8X02sTgNq7sm+Nzyb3v0XDO2er/LMx6MzB956Ge930/pk6A3SmfH/Bdfx2fHtlixHAf8yrJQE4UD+8Ve/qYDIS9hhuUIoXimMaU3yxFScyjdclLS2s69x1EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgL2JuwbvJd9g7dh8++A35QazuboP+QfIjm30N3s3H/3gZAAAAAAAAAAAAwIv8B8Ahddx8igi1AAAAAElFTkSuQmCC"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0">
                    <Image
                        onClick={() => router.push("/")}
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
                    <HomeIcon
                        onClick={() => router.push("/")}
                        className="navBtn"
                    />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45" />
                                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon
                                onClick={() => setOpen(true)}
                                className="navBtn"
                            />
                            <HeartIcon className="navBtn" />
                            <img
                                onClick={signOut}
                                className=" h-10 w-10 rounded-full cursor-pointer"
                                src={session.user.image}
                                alt="hearticon"
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

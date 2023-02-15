import Stories from "./Stories";
import Posts from "./Posts";
import SideProfile from "./SideProfile";
import Suggestions from "./Suggestions";

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
import { useSession } from "next-auth/react";

function Feed() {
    const { data: session } = useSession();


    return (
        <main
            className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
                !session && "!grid-cols-1 !max-w-3xl"
            }`}
        >
            <section className="col-span-2">
                {/*Stories */}
                <Stories />
                {/*Posts */}
                <Posts />
                <Posts />
            </section>

            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                    <div className="fixed">
                        <SideProfile />
                        <Suggestions />
                    </div>
                </section>
            )}
        </main>
    );
}

export default Feed;

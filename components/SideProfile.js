import { signOut, useSession } from "next-auth/react";

function SideProfile() {
    const { data: session } = useSession();

    return (
        <>
            <div className="flex justify-between mt-14 ml-10 items-center">
                <img 
                    className="w-16 h-16 rounded-full border p-[2px]"
                    src={session?.user?.image}
                    alt=""
                />
                <div className="flex-1 mx-4">
                    <h2 className="font-bold">GoodLuckLich</h2>
                    <h3 className="text-sm text-gray-400">Live laugh lasagna</h3>
                </div>
                <button className="text-blue-400 text-sm font-semibold" onClick={signOut}>Sign Out</button>
            </div>
        </>
    );
}

export default SideProfile;

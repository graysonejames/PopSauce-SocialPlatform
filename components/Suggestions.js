import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            // password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            company: faker.company.name(),
            registeredAt: faker.date.past(),
        }));
        setSuggestions(suggestions);
    }, []);

    return (
        <>
            <div className="mt-4 ml-10">
                <div className="flex justify-between text-sm mb-5">
                    <h3 className="text-sm font-bold text-gray-400">
                        Suggestions for you
                    </h3>
                    <button className="text-gray-600 font-semibold">
                        See All
                    </button>
                </div>
            </div>

            {suggestions.map((profile) => (
                <div
                    key={profile.Id}
                    className="flex items-center justify-between mt-3"
                >
                    <img
                        className="h-10 w-10 rounded-full border p-[2px]"
                        src={profile.avatar}
                        alt=""
                    />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">
                            {profile.username}
                        </h2>
                        <h3 className="text-xs text-gray-400">
                            I work at {profile.company}
                        </h3>
                    </div>
                    <button className="font-bold text-xs text-blue-400">
                        Follow
                    </button>
                </div>
            ))}
        </>
    );
}

export default Suggestions;

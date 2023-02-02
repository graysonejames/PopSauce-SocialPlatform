import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import Story from "./Story";


function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            // email: faker.internet.email(),
            avatar: faker.image.avatar(),
            // password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }));
        setSuggestions(suggestions);
        console.log(suggestions)
    }, []);


    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
            {suggestions.map((suggestion) => (
                <Story
                    key={suggestion.userId}
                    avatar={suggestion.avatar}
                    username={suggestion.username}
                />
            ))}
        </div>
    );
}


export default Stories;
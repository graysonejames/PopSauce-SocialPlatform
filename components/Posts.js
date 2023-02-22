import { useState, useEffect } from "react";
import { onSnapshot, collection, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    console.log(posts);

    return (
        <>
            {/* look into map key */}
            {posts.map((post) => (
                <Post
                    postKey={post.id}
                    userId={post.id}
                    username={post.data().username}
                    avatar={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </>
    );
}

export default Posts;

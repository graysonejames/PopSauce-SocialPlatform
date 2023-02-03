import Post from "./Post";

const dummyData = [
    {
        userId: '123',
        username: 'GoodLuckLich',
        avatar: 'https://media.licdn.com/dms/image/C5603AQFQ9muzujqwEg/profile-displayphoto-shrink_200_200/0/1587445356674?e=1680739200&v=beta&t=7KpgCy6EytJrtaaWA9Kea2vbfSSyNMe2Z3FpcrHS-4Q',
        img: 'https://media.licdn.com/dms/image/C5603AQFQ9muzujqwEg/profile-displayphoto-shrink_200_200/0/1587445356674?e=1680739200&v=beta&t=7KpgCy6EytJrtaaWA9Kea2vbfSSyNMe2Z3FpcrHS-4Q',
        caption: 'welcome to PopCapt',
    },
]

function Posts() {
    return (
        <>
            {dummyData.map((post) => (
                <Post
                    key={post.userId}
                    userId={post.userId}
                    username={post.username}
                    avatar={post.avatar}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </>
    );
}

export default Posts;

import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <>
      <h1>Total post are here</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {posts.map((post) => (
        <div key={post.id} style={{ margin: "10px 0px" }}>
          <Link href={`posts/${post.id}`} passHref>
            <h3>
              {post.id} {post.title}
            </h3>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}

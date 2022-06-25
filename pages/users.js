import User from "../components/user";

export default function Users({ users }) {
  return (
    <>
      <h1>All user data</h1>
      <h2>Total user is {users.length}</h2>
      {users.map((user) => (
        <div key={user.id} style={{ padding: "10px 0px" }}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

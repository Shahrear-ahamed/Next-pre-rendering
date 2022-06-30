import Header from "../components/header";

export default function About() {
  return <div>this is about</div>;
}

About.getLayout = function foolish(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

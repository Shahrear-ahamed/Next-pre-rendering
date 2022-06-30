import Header from "../components/header";
import Head from "next/head";
import Image from "next/image";
import imgs from "../public/1.jpg";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Lean Next.js " />
      </Head>
      <h2>this is about</h2>
      <h4>Here is my photos</h4>
      {["1", "2", "3", "4", "5"].map((img) => (
        <div key={img}>
          <Image
            src={`/${img}.jpg`} placeholder="blur" blurDataURL alt="image" width="520"  height="320"/>
        </div>
      ))}
    </>
  );
}

About.getLayout = function foolish(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};

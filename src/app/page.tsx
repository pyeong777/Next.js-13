import Image from "next/image";
import Counter from "./../components/Counter";

export default function Home() {
  return (
    <>
      <h1>홈페이지 v1.0.1</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="image"
        width={400}
        height={400}
      />
    </>
  );
}

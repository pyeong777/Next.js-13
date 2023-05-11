import { getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import testimage from "public/images/testimage.jpeg";

// export const revalidate = 3;

export default async function productPage() {
  // 서버 파일(db)에 있는 제품의 리스트를 읽어와서 보여준다
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image width={300} src={testimage} alt="testimage" priority />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

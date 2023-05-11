import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";
import { revalidate } from "./[slug]/page";

// export const revalidate = 3;

export default async function productPage() {
  // 서버 파일(db)에 있는 제품의 리스트를 읽어와서 보여준다
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 },
    //revalidate 값 0이면 ssr 그이상이면 isr
    // cache: "no-store", //no store도 ssr
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}

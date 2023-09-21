'use client'
import { useGlobalContext } from "@/contexts/store";
import { PRODUCTS as rawProducts } from "@/data/prod";
import styles from "./page.module.css"
import InfoDetail from "@/components/InfoDetail";
import { useEffect } from "react";
import { TProductApi, TProductCart } from "@/data/types";

const PRODUCTS: TProductCart[] = []

rawProducts.forEach((e: TProductApi) => {
  return PRODUCTS.push({ ...e, top: false, slug: e.name.replace(/ /g, '-'), quantity: 0 })
});

export default function Page({ params }: { params: { slug: string } }) {

  // const { productsStore: PRODUCTS } = useGlobalContext()
  const product = PRODUCTS.find((p) => p.slug === params.slug)!;

  return (
    <>
      {/* <Paper elevation={3} > */}
      <div className={styles.container}>
        <InfoDetail {...product} />
      </div>
      {/* </Paper> */}
    </>
  );
}

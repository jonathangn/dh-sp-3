import InfoCard from "@/components/InfoCard";
import ProductCard from "@/components/ProductCard";

import { PRODUCTS } from "@/data/data";
import { Paper } from "@mui/material";

import styles from "./page.module.css"
import InfoDetail from "@/components/InfoDetail";

export default function Page({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  console.log(params?.slug, product);

  return (
    <>
      {/* <Paper elevation={3} > */}
      <div className={styles.container}>
        {/* <InfoDetail {product} /> */}
      </div>
      {/* </Paper> */}
    </>
  );
}

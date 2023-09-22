// "use client"
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import Container from "@mui/material/Container";
import CategoryCard from '@/components/CategoryCard'
import {
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CATEGORIES, } from "@/data/data";
import { TProductCart } from "@/data/types";

async function getProducts() {
  const fetchProd = await import("../app/api/products/route.js",)
  const resProd = await fetchProd.GET()
  const products = await resProd.json()
  const { data } = products

  return data.data
}

export default async function Home() {
  const PRODUCTS: TProductCart[] = await getProducts()
  const productsTop = await PRODUCTS

  return (
    <main className={styles.main}>
      <Container>
        <div style={{ paddingBlock: "2rem", marginTop: "1rem" }}>
          <Typography
            fontWeight="bold"
            textAlign="center"
            style={{ fontSize: "xX-large", color: "teal" }}
          >
            Nuestras categorías
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center">
          {CATEGORIES.map((c, i) => (
            <Grid key={c.name}>
              <CategoryCard {...c} />
            </Grid>
          ))}
        </Grid>
        <div style={{ paddingBlock: "2rem", marginTop: "1rem" }}>
          <Typography
            fontWeight="bold"
            textAlign="center"
            style={{ fontSize: "xX-large", color: "teal" }}
          >
            Bebidas destacadas
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center" className={styles.grid}>
          {productsTop.map((p, i) => (
            <Grid key={p.name} className={styles.productCard}>
              <ProductCard {...p} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

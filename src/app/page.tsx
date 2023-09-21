// "use client"
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import Container from "@mui/material/Container";
import CategoryCard from '@/components/CategoryCard'
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Typography,
  createTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { CATEGORIES, PRODUCTS, assetsAds, assetsHero } from "@/data/data";
// import { useGlobalContext } from "@/contexts/store";
import { useEffect } from "react";
import { TProductCart } from "@/data/types";

const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

// const theme = createTheme({
//   typography: {
//     fontSize: 16,
//     fontFamily: poppins.style.fontFamily,
//   },
// });

type imgBanner = {
  name: string,
  ref: string,
  imageUrl: string
}

function Item(props: { item: imgBanner }) {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        className="imgCarrousel"
        src={props?.item?.imageUrl}
        alt={props?.item?.name}
      />
      <Button
        style={{
          paddingInline: "1rem",
          background: "rgba(255, 255, 255, 0.85)",
          color: "teal",
          position: "relative",
          bottom: "3.5rem",
          width: "max-content",
          alignSelf: "center",
        }}
      >
        <Link href={`/products/${props?.item?.ref}`}>saber más</Link>
      </Button>
    </Paper>
  );
}

function Ad(props: { item: imgBanner }) {
  return (

    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "none"
      }}
    >
      <img
        className="imgCarrousel"
        src={props?.item?.imageUrl}
        style={{ maxHeight: "180px", width: "100%", objectFit: "cover" }}
        alt={props?.item?.name}
      />
    </Paper>
  );
}

async function getProducts() {
  // const MAIN_API = process.env.MAIN_API
  // const res = await fetch(`${MAIN_API}/products`, { cache: 'no-store' })
  // StaticData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'force-cache' })
  // DynamicData const res = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' })
  //  const pizzas = await fetch("http://localhost:3000/api/products");
  //  const orders = admin && await axios.get("http://localhost:3000/api/orders");
  const fetchProd = await import("../app/api/products/route.js",)
  const resProd = await fetchProd.GET()
  const products = await resProd.json()
  const { data } = products

  return data.data
}

export default async function Home() {
  // useEffect(() => {
  //   const { productsStore } = useGlobalContext()

  // })

  const PRODUCTS: TProductCart[] = await getProducts()

  const productsTop = await PRODUCTS

  // const products = getProducts()
  // const PRODUCTS = [];
  // console.log(productsStore, 'desdepage')

  // if (PRODUCTS.length > 0) {
  return (
    <main className={styles.main}>
      <Container>
        {/* <Carousel
            className={styles.carrousel}
            indicators={false}
            interval={5000}
          >
            {assetsHero.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel> */}

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
              {/* <InfoCard product={c} /> */}
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

        {/* <Carousel
            className={styles.carrouselAds}
            height={150}
            indicators={false}
            interval={5000}
          >
            {assetsAds.map((item, i) => (
              <Ad key={i} item={item} />
            ))}
          </Carousel> */}
      </Container>
    </main>
  );
  // } else {
  //   return <>loading...</>
  // }
}

"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import Container from "@mui/material/Container";
import InfoCard from "@/components/InfoCard";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Input,
  Typography,
  createTheme,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Josefin_Sans } from "next/font/google";

import Link from "next/link";

import { PRODUCTS } from "@/data/data";
import { CATEGORIES } from "@/data/data";
import Dashboard from "@/components/dashboard/Dashboard";
import CategoryCard from "@/components/CategoryCard";
import Cart from "@/components/Cart";
import { TProductCart } from "@/data/types";

const inter = Inter({ subsets: ["latin"] });

const josefin_Sans = Josefin_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: josefin_Sans.style.fontFamily,
  },
});

type imgBanner = {
  name: string,
  ref: string,
  imageUrl: string
}

var items = [
  {
    name: "Random Name #1",
    ref: "otherx",
    imageUrl:
      "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Random Name #2",
    ref: "beerx",
    imageUrl:
      "https://images.pexels.com/photos/2410165/pexels-photo-2410165.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Random Name #3",
    ref: "winex",
    imageUrl:
      "https://images.pexels.com/photos/372959/pexels-photo-372959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

var ads = [
  {
    name: "Random Name #1",
    ref: "otherx",
    imageUrl:
      "https://www.imaginacolombia.com/assets/media/tr-bavaria/portada-bavaria_extraLargeThumb.webp",
  },
  {
    name: "Random Name #2",
    ref: "beerx",
    imageUrl:
      "https://d3omj40jjfp5tk.cloudfront.net/media_gallery/merchant/5f2ed0db9d431a1d0dab7b89/image/63bedba3e658f750ddcc8d4e.png?1673452451",
  }
];

function Item(props: { item: imgBanner }) {
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
      <img
        className="imgCarrousel"
        src={props?.item?.imageUrl}
        style={{ maxHeight: "350px", width: "100vw", objectFit: "cover" }}
      />
      {/* <Input disableUnderline style={{ caretColor: 'red', background: 'white', borderRadius: '.5rem', position: 'relative', bottom: '6rem', padding: '.2rem', alignSelf: 'center' }}> Muestrame</Input> */}
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
      }}
    >
      <img
        className="imgCarrousel"
        src={props?.item?.imageUrl}
        style={{ maxHeight: "180px", width: "100%", objectFit: "cover" }}
      />
    </Paper>
  );
}

export default function Home() {

  const productsTop = PRODUCTS.filter((p) => p.top)

  return (
    <main className={styles.main}>
      <Container>
        <Carousel
          className={styles.carrousel}
          height={350}
          indicators={false}
          interval={7000}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        <div style={{ paddingBlock: "2rem", marginTop: "1rem" }}>
          <Typography
            fontWeight="bold"
            textAlign="center"
            style={{ fontSize: "xx-large", color: "teal" }}
          >
            Bebidas Destacadas
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center">
          {productsTop.map((p, i) => (
            <Grid key={p.name}>
              <ProductCard {...p} />
            </Grid>
          ))}
        </Grid>

        <div style={{ paddingBlock: "2rem", marginTop: "1rem" }}>
          <Typography
            fontWeight="bold"
            textAlign="center"
            style={{ fontSize: "xx-large", color: "teal" }}
          >
            Nuestras Categorías
          </Typography>
        </div>
        <Grid container spacing={2} justifyContent="center">
          {/* {CATEGORIES.map((c, i) => (
            <Grid key={c.name}>
              <CategoryCard category={c} />
              <InfoCard product={p} />
            </Grid>
          ))} */}
        </Grid>
        <Carousel
          className={styles.carrouselAds}
          height={150}
          interval={5000}
        >
          {ads.map((item, i) => (
            <Ad key={i} item={item} />
          ))}
        </Carousel>
        <Cart />
      </Container>
    </main>
  );
}

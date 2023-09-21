"use client";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";

import {
  Typography,
  createTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Poppins } from "next/font/google";
import { PRODUCTS } from "@/data/data";


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
  },
});

export default function Offers() {
  const productsTop = PRODUCTS.filter((p) => p.sale);

  return (
    <main className={styles.main}>
      <div style={{ paddingBlock: "2rem", marginTop: "1rem" }}>
        <Typography
          fontWeight="bold"
          textAlign="center"
          style={{ fontSize: "xx-large", color: "teal" }}
        >
          Nuestras ofertas
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {productsTop.map((product, i) => (
          <Grid key={product.name}>
            {/* <ProductCard {...product} /> */}
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
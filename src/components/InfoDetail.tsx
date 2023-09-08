import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Paper } from "@mui/material";
import Box from "@mui/joy/Box";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./InfoDetail.module.css"
import { TProductCart } from "@/data/types";

export default function InfoDetail(product: TProductCart) {
  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <Card sx={{ maxWidth: 345, margin: "auto" }} className={styles.card}>
          <CardActionArea href={`/products/${product?.slug}`}>
            <CardMedia
              component="img"
              height="300"
              image={product?.urlImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid xs={4} >
        <Card className={styles.cards}>
          <Typography variant="h5" color="text.secondary" className={styles.typ}>
            Precio:
          </Typography>
          <Typography variant="h5" color="text.secondary" className={styles.typ}>
            Puntuación:
          </Typography>
          <Button className={styles.button}>
            Agregar
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

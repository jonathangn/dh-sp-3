'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./InfoDetail.module.css"
import { TProductCart } from "@/data/types";
import { useGlobalContext } from "@/contexts/store";

export default function InfoDetail(product: TProductCart) {

  const { addToCart } = useGlobalContext()

  return (
    <Grid container spacing={2}>
      <Grid >
        <Card sx={{ margin: "auto", display: 'flex', flexDirection: 'row' }} className={styles.card}>
          <div>
            <CardMedia
              component="img"
              height="400"
              image={product?.image_id}
              alt="green iguana"
              style={{ objectFit: 'contain' }}
            />

          </div>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.description}
            </Typography>
            <Typography variant="h5" color="teal" className={styles.typ}>
              $ {product?.price}
            </Typography>
            <Button className={styles.button} onClick={() => addToCart(product)}>
              Agregar
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={8} >
      </Grid>
    </Grid>
  );
}

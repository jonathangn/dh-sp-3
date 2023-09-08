import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./InfoCard.module.css"
import { TProduct, TProductCart } from '@/data/types';

export default function InfoCard(product: TProductCart) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} className={styles.card}>
      <CardActionArea href={`/products/${product?.slug}`} >
        <CardMedia
          component="img"
          height="200"
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
  );
}
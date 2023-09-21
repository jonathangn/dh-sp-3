import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styles from "./InfoCard.module.css"
import { TProductCart } from '@/data/types';

export default function InfoCard(product: TProductCart) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} className={styles.card}>
      <CardActionArea href={`/products/${product?.slug}`} >
        <CardMedia
          component="img"
          height="250"
          image={product?.image_id}
          alt={product?.name}
        />
        <CardContent>
          <div className={`${styles.nombreCategoria}`}>
            {product?.name}
          </div>
          {/* <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
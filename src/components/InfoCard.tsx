import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from "./InfoCard.module.css"
import { TProductCart } from '@/data/types';
import Link from 'next/link';

export default function InfoCard(product: TProductCart) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }} className={styles.card}>
      <Link href={`/products/${product?.slug}`} >
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
        </CardContent>
      </Link>
    </Card>
  );
}
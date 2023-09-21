import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./InfoCard.module.css"

interface TPerson {
  redes: string
  urlImg: string
  title: string
  name: string
}

export default function InfoCardNosotros(person: TPerson) {
  return (
    <Card sx={{ maxWidth: 125, margin: "auto" }} className={styles.card}>
      <CardActionArea href={person?.redes} target="_blank">
        <CardMedia
          component="img"
          height="125"
          image={person?.urlImg}
          alt={person?.title}
        />
        <CardContent>
          <div className={`${styles.nombreCategoria}`}>
            {person?.name}
          </div>
          {/* <Typography variant="body2" color="text.secondary">
            {product?.description}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
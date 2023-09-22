'use client'
import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FaBolt, FaBeer, FaWineBottle, FaWineGlass, FaGlassWhiskey, FaFire, FaGlassMartini, FaWater } from 'react-icons/fa';
import styles from "./ProductCard.module.css"
import Button from '@mui/material/Button';
import { useGlobalContext } from '@/contexts/store';
import { TProductCart } from '@/data/types';

export default function ProductCard(product: TProductCart) {

  const { addToCart } = useGlobalContext();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <main className={styles.producto}>
      <CardHeader
        avatar={
          <Avatar sx={{}} style={{ background: 'teal' }} aria-label="recipe">
            {product.Category === 'Cerveza' ? <FaBeer /> : <></>}
            {product.Category === 'Vino' ? <FaWineGlass /> : <></>}
            {product.Category === 'Energizante' ? <FaBolt /> : <></>}
            {product.Category === 'Whisky' ? <FaGlassWhiskey /> : <></>}
            {product.Category === 'Tequila' ? <FaWineBottle /> : <></>}
            {product.Category === 'Vodka' ? <FaGlassMartini /> : <></>}
            {product.Category === 'Gaseosa' ? <FaWater /> : <></>}
            {product.Category === 'Fernet' ? < FaWineBottle /> : <></>}
            {product.Category === 'Aguardiente' ? <FaFire /> : <></>}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        subheader={product.Category}
      />
      <CardMedia
        component="img"
        height="340"
        image={product.image_id}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" >
          {product.description}
        </Typography>
      </CardContent >
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography fontSize="lg" fontWeight="lg">
          Precio: $ {product.price}
        </Typography >
        <Button
          onClick={() => addToCart(product)}
          className={styles.button}
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: 'teal' }}
        >
          Agregar
        </Button>
      </CardActions >
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Acerca de</Typography>
          <Typography paragraph>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </main >
  );
}


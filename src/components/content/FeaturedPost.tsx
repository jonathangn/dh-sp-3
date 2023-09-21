import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { teal } from '@mui/material/colors';
import { Box } from '@mui/material';
import styles from './Blog.module.css'

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    linkText: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={3} >
      <CardActionArea component="a" href={post.linkText} target="_blank"  >
        <Box sx={{ display: 'flex', position: 'relative' }}  >
          <img
            src={post.image}
            alt={post.imageLabel}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            className={styles.cardPost}
          />
          <Box
            className={styles.cardPost}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: 'white',
              padding: '16px',
            }}
          >
            <Typography component="h6" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="caption" color="white">
              {post.date}
            </Typography>
            <Typography variant="caption" paragraph>
              {post.description}
            </Typography>
            <Typography variant="caption" color="white">
              Continuar leyendo...
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Grid>
  );
}
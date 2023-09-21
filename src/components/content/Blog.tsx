import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from '@/components/content/FeaturedPost';
import post1 from './posts/blog-post1.md';
import post2 from './posts/blog-post2.md';
import post3 from './posts/blog-post3.md';

const sections = [
  { title: 'Eventos', url: '#' },
  { title: 'Comunidad', url: '#' },
  { title: 'Maridajes', url: '#' },
];

const mainFeaturedPost = {
  title: 'Última Publicación',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continuar leyendo',
};

const featuredPosts = [
  {
    title: 'Ideas de Cocteles',
    date: 'Agosto, 11',
    description:
      '17 Cocteles súper sencillos que harán que todos crean que eres bartender',
    image: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/29/14/enhanced/webdr11/enhanced-21083-1419881393-8.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
    imageLabel: 'Image Text',
    linkText: 'https://www.buzzfeed.com/gretaalvarez/saca-al-bartender-que-hay-en-ti?epik=dj0yJnU9ZHZ1Xy1oMTNOZUo4ekJlcDFtUHc5ZnhkbVgwc19SYWYmcD0wJm49UFh5R1NLVV9pMExMcHV5cVE4Q0FjUSZ0PUFBQUFBR1QweEg4',
  },
  {
    title: 'Vino diario',
    date: 'Agosto 18',
    description:
      'Conoce cuáles son las ventajas de beber una copa de vino cada día.',
    image: 'https://i.pinimg.com/564x/5e/8c/93/5e8c93ad57ddce0538ba2362fb50c2a5.jpg',
    imageLabel: 'Image Text',
    linkText: 'https://mejorconsalud.as.com/las-ventajas-de-beber-vino-cada-dia/',
  },
  {
    title: 'Los mejores Whiskys',
    date: 'Agosto 25',
    description:
      'Cuales son los 10 Mejores Whiskys del Mundo 2023',
    image: 'https://i.pinimg.com/564x/71/38/fd/7138fde1b0792ec3f65d37764a023d73.jpg',
    imageLabel: 'Image Text',
    linkText: 'https://bebidasconespiritu.com/mejores-whiskys/',
  },
  {
    title: 'Don Julio 1942',
    date: 'Septiembre 01',
    description:
      'Este Tequila celebra ese año con un Tequila Añejo madurado por 30 meses en barriles de whiskey bourbon.',
    image: 'https://i.pinimg.com/564x/12/29/5c/12295cb6f6f2831c80ff760714b496f5.jpg',
    imageLabel: 'Image Text',
    linkText: 'https://marcasdetequila.com/don-julio-1942/',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Suscríbete',
  description:
    'Recibe en tu bandeja de entrada, novedades de gran interés para todos los amantes de la buena bebida y los eventos entorno a ella.',
  archives: [
    { title: 'Octubre 2023', url: '#' },
    { title: 'September 2023', url: '#' },
    { title: 'Augosto 2023', url: '#' },
    { title: 'Julio 2023', url: '#' },
    { title: 'Junio 2023', url: '#' },
    { title: 'Maya 2023', url: '#' },
    { title: 'Abril 2023', url: '#' },
  ]
};

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main style={{ padding: "2rem" }}>
        {/* <Header title="Blog" sections={sections} /> */}
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          {/* <Main title="From the firehose" posts={posts} /> */}
          {/* <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
        /> */}
        </Grid>
      </main>
    </ThemeProvider>
  );
}
'use client'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '@/components/content/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from '@/components/content/FeaturedPost';
import Main from '@/components/content/Main';
import Sidebar from '@/components/content/SideBar';
import Footer from '@/components/content/Footer';
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
    title: 'Publicación destacada',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Publicación destacada',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
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
      <Header title="Blog" sections={sections} />
      {/* <main style={{ marginBottom: "3rem" }}> */}
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
        />
      </Grid>
      {/* </main> */}
    </ThemeProvider>
  );
}
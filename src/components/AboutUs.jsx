// src/components/AboutUs.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: '#f4f4f4',
    color: 'black',
  },
  header: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  content: {
    padding: theme.spacing(1),
  },
  imageWrapper: {
    flex: '1 1 40%',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
  },
  textWrapper: {
    flex: '1 1 60%',
    padding: theme.spacing(2),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Mecánicos de Corazón en Mar del Plata</title>
        <meta
          name="description"
          content="Mecánicos de Corazón, una empresa marplatense fundada por hermanos apasionados por la mecánica, ofrece servicios mecánicos de alta calidad y tecnología de punta."
        />
        <meta
          name="keywords"
          content="mecánica, reparación de autos, Mar del Plata, mecánicos de confianza, mantenimiento de autos"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Box className={classes.root} component="section" aria-labelledby="about-us-title">
        <Container maxWidth="md">
          <Typography variant="h4" className={classes.header} id="about-us-title">
            Sobre Nosotros
          </Typography>

          <Card className={classes.card} component="article">
            <Box className={classes.imageWrapper}>
              <img
                src="/assets/quienessomos.jpg"
                alt="Equipo de mecánicos de Mar del Plata con experiencia y dedicación"
                className={classes.image}
                loading="lazy"
              />
            </Box>

            <CardContent className={classes.textWrapper}>
              <Typography variant="h6" gutterBottom>
                Mecánicos de Corazón, desde Mar del Plata
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Fundada por dos hermanos con una pasión profunda por la mecánica, nuestra empresa combina tradición e
                innovación en cada servicio. Con años de experiencia en el taller y un compromiso constante con la
                excelencia, ofrecemos soluciones mecánicas de primer nivel, pensadas para las necesidades actuales.
                Como marplatenses, aportamos una perspectiva única y cercana, que nos diferencia en el rubro.
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Nuestra misión es brindar soluciones mecánicas confiables y de alta calidad para que puedas seguir
                adelante con tranquilidad. Combinamos tecnología de punta con un trato al cliente que podés confiar,
                ya sea para una reparación compleja o un mantenimiento de rutina.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

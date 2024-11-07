import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#f4f4f4",
    color: "black",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  content: {
    padding: theme.spacing(1),
  },
  imageWrapper: {
    flex: "1 1 40%",
    marginBottom: theme.spacing(0),
    padding: 0,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    border: "none",
    margin: 0,
  },
  textWrapper: {
    flex: "1 1 60%",
    padding: theme.spacing(2),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>FMSuspensión - Mecánicos de Confianza en Mar del Plata</title>
        <meta
          name="description"
          content="En FMSuspensión, ofrecemos servicios de mecánica general, frenos, alineación, balanceo, y reparación, arreglo  de tren delantero en Mar del Plata. Somos tu taller de confianza para el mantenimiento de autos."
        />
        <meta
          name="keywords"
          content="mecánica general Mar del Plata, taller de frenos, alineación y balanceo Mar del Plata, mecánicos de autos Mar del Plata, tren delantero, reparación de autos Mar del Plata, taller de mecánica en Mar del Plata, frenos Mar del Plata"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Box className={classes.root} component="section">
        <Container maxWidth="md">
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
                Mecánicos de Confianza, desde Mar del Plata
              </Typography>
              <Typography variant="body1" className={classes.content}>
                FMSuspensión es un taller de mecánica general fundado por dos
                hermanos apasionados por la reparación de autos en Mar del
                Plata. Con años de experiencia en el rubro, nos especializamos
                en servicios de alta calidad como reparación de frenos,
                alineación, balanceo y reparación de tren delantero. En nuestro
                taller, trabajamos con la mejor tecnología para ofrecer un
                servicio rápido, eficiente y confiable a cada cliente.
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Nuestra misión es ofrecer soluciones mecánicas integrales para
                autos, con un enfoque personalizado y cercano. Si necesitas
                reparar tus frenos, hacer una alineación o balanceo, o atender
                cualquier otra necesidad de mantenimiento o reparación, en
                FMSuspensión encontrarás un equipo de expertos dispuestos a
                ayudarte. Como mecánicos locales en Mar del Plata, comprendemos
                la importancia de mantener tu vehículo en óptimas condiciones
                para que sigas circulando con total seguridad.
              </Typography>
              <Typography variant="body1" className={classes.content}>
                Ofrecemos una atención al cliente de calidad, priorizando la
                confianza y transparencia en cada servicio. Desde reparaciones
                complejas hasta el mantenimiento rutinario, en FMSuspensión
                siempre buscamos que te sientas tranquilo sabiendo que tu auto
                está en las mejores manos.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

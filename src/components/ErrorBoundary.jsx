import React from 'react';
import { Box, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error en componente:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 10,
            color: '#fff',
          }}
        >
          <Typography variant="h5" color="primary" gutterBottom>
            Algo salió mal al cargar esta sección.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.setState({ hasError: false })}
            sx={{ mt: 2 }}
          >
            Reintentar
          </Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

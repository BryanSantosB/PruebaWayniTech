import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';

const ProductoForm = ({ producto, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '0',
    nombre: '',
    precio: ''
  });

  useEffect(() => {
    if (producto) {
      setFormData({
        id: producto.id.toString(),
        nombre: producto.nombre,
        precio: producto.precio.toString()
      });
    }
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: parseInt(formData.id),
      nombre: formData.nombre,
      precio: parseFloat(formData.precio)
    });
  };

  return (
    <Paper elevation={3} sx={{
      padding: 3,
      maxWidth: 400,
      margin: 'auto',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: 2,
    }}>
      <Typography variant="h5" gutterBottom className='text-white'>
        {producto ? 'Editar Producto' : 'Crear Nuevo Producto'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="nombre"
          label="Nombre del Producto"
          value={formData.nombre}
          onChange={handleChange}
          required
          sx={{ 
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          name="precio"
          label="Precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          required
          sx={{ 
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
            sx={{ 
              backgroundColor: '#2C5364',
              '&:hover': {
                backgroundColor: '#203A43',
              },
            }}
          >
            {producto ? 'Actualizar' : 'Crear'}
          </Button>
          <Button 
            variant="outlined" 
            onClick={onCancel}
            sx={{ 
              color: 'white', 
              borderColor: 'white',
              '&:hover': {
                borderColor: '#0F2027',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Cancelar
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default ProductoForm;
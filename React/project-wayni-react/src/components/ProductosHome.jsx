import { useEffect, useState } from "react";
import TablaProductos from "./ProductosTable";
import ProductoForm from "./ProductoForm";
import Buscador from "./Buscador";
import Loader from "./Loader";

const ProductosHome = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://localhost:7285/api/Productos");
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSubmitProduct = async (productData) => {
    try {
      let response;
      if (editingProduct) {
        response = await fetch(
          `https://localhost:7285/api/Productos/${editingProduct.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
          }
        );
      } else {
        response = await fetch("https://localhost:7285/api/Productos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
      }

      if (response.ok) {
        const updatedProduct = await response.json();
        setProductos((prevProductos) => {
          if (editingProduct) {
            return prevProductos.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            );
          } else {
            return [...prevProductos, updatedProduct];
          }
        });
      } else {
        console.error("Error submitting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting product:", error);
    }

    setShowForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const confirmDelete = window.confirm("¿Estás seguro que deseas eliminar este producto?");
  
      if (!confirmDelete) {
        return; 
      }
  
      const response = await fetch(
        `https://localhost:7285/api/Productos/${productId}`,
        {
          method: "DELETE",
        }
      );
  
      if (response.ok) {
        setProductos((prevProductos) =>
          prevProductos.filter((product) => product.id !== productId)
        );
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filtrado dinámico de productos
  const filteredProductos = searchTerm
    ? productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productos; 

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="contenedorProductoHome">
      <h1 id="titulo">Productos</h1>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button className="button" onClick={handleAddProduct}>
          Agregar
        </button>
        <Buscador onSearch={handleSearch} />
      </div>
      <TablaProductos
        productos={filteredProductos}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      {showForm && (
        <div className="overlay">
          <ProductoForm
            producto={editingProduct}
            onSubmit={handleSubmitProduct}
            onDelete={handleDeleteProduct}
            onCancel={() => {
              setShowForm(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductosHome;




  
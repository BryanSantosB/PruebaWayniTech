# Prueba de Entrada para Desarrollador .NET y React

Este proyecto es una aplicación web diseñada para gestionar productos de manera eficiente.

## Requisitos

Para ejecutar este proyecto localmente, necesitarás tener instalado Node.js y npm, así como .NET SDK. Además, se requiere acceso a una base de datos SQL Server para almacenar los datos de los productos.

## Configuración

Para configurar y ejecutar el proyecto, sigue estos pasos:

1. **Clonar el repositorio:**
   - `git clone https://github.com/BryanSantosB/PruebaWayniTech.git`

2. **Configurar variables de entorno:**
   - Será necesario actualizar la cadena de conexión en el proyecto .NET.
   - En `Program.cs`, actualiza la ruta del CORS si es necesario.
   - Actualiza las rutas de las APIs en el proyecto React si es necesario (puerto).

3. **Inicializar la base de datos:**
   - Ejecuta el script de la base de datos.

4. **Instalar dependencias:**
   - Para el proyecto .NET:
     ```bash
     dotnet add package Microsoft.EntityFrameworkCore
     dotnet add package Microsoft.EntityFrameworkCore.Tools
     dotnet add package Microsoft.EntityFrameworkCore.SqlServer
     ```
   - Para el proyecto React:
     ```bash
     npm install @mui/material @emotion/react @emotion/styled
     ```

## Ejecución del proyecto

1. **Ejecución del Backend (Proyecto .NET):**
   - Navega al directorio del proyecto .NET.
   - Ejecuta el siguiente comando:
     ```bash
     dotnet run
     ```

2. **Ejecución del Frontend (Proyecto React):**
   - Navega al directorio del proyecto React.
   - Ejecuta el siguiente comando:
     ```bash
     npm start
     ```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

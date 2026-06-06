# 🌎 World Explorer

World Explorer es una aplicación web tipo SPA desarrollada con React y Vite.  
La aplicación consume datos desde la API pública REST Countries y muestra información de países como nombre, bandera, región y nombre oficial.

## 🚀 Tecnologías usadas

- React 19
- Vite
- React Router DOM
- Axios
- Shadcn UI
- Tailwind CSS
- Lucide React
- REST Countries API

## 📌 Funcionalidades

- Página Home con hero de presentación.
- Consumo de API pública de países.
- Listado de países destacados en la página principal.
- Ruta `/entities` con el listado completo de países.
- Visualización de bandera, nombre, región y nombre oficial.
- Navegación entre rutas usando React Router.
- Estilos aplicados con Shadcn UI.
- Loader mientras se cargan los datos.

## 📂 Rutas del proyecto

| Ruta | Descripción |
|---|---|
| `/` | Página principal con presentación y países destacados |
| `/entities` | Listado completo de países consumidos desde la API |

## ⚙️ Pasos para ejecutar el servidor

Clonar el repositorio:

```bash
git clone https://github.com/diegosotelo-png/countries-react.git
cd countries-react
npm install

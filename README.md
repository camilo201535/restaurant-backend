Backend  Supermercado

API REST para la gestion basica de un supermercado (productos, proveedores, usuarios y ventas), desarrollada con Node.js, Express, Sequelize y PostgreSQL, siguiendo arquitectura MVC.
## Integrante

| Nombre completo | Responsabilidades |
|---|---|
| JUAN CAMILO TALAGA CRUZ | Diseño de la base de datos y modelos Sequelize (Producto, Proveedor, Usuario, Venta, DetalleVenta); lógica de negocio en los servicios (validaciones, cálculo automático del total de venta, control de stock); controladores y endpoints REST de las 5 entidades; documentación Swagger; configuración de Express y conexión a PostgreSQL. |



## Tecnologías utilizadas

- Node.js + Express.js
- PostgreSQL
- Sequelize ORM
- Swagger (swagger-jsdoc + swagger-ui-express)
- bcryptjs (hash de contraseñas)

## Estructura del proyecto

```
restaurant-backend/
├── app.js                     # Entrada principal: servidor, DB, rutas
├── src/
│   ├── config/
│   │   ├── database.js        # Conexión Sequelize a PostgreSQL
│   │   ├── sync.js            # Sincronización de modelos con la BD
│   │   └── swagger.js         # Configuración de swagger-jsdoc
│   ├── models/                # Modelos Sequelize + asociaciones (index.js)
│   ├── services/               # Lógica de negocio
│   ├── controllers/            # Manejo de request/response
│   └── routes/                 # Definición de endpoints + docs Swagger
```

## Instrucciones de ejecución

### 1. Requisitos previos

- Node.js 18 o superior
- PostgreSQL corriendo localmente (o accesible remotamente)

### 2. Clonar el repositorio

```bash
git clone https://github.com/camilo201535/restaurant-backend.git
cd restaurant-backend
```

### 3. Configurar variables de entorno

 Archivo `.env` en la raíz del proyecto con  datos de conexión:

```env
DB_NAME=marketsoft_db
DB_USER=postgres
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432
NODE_ENV=development
```


### 4. Crear la base de datos

Base de datos PostgreSQL nombre restaurantDB` . Sequelize  crea las tablas automaticamente al iniciar el servidor.

### 5. Instalar dependencias y ejecutar

```bash
npm install
npm start
```

El servidor queda disponible en `http://localhost:3000`.
Si `NODE_ENV=development`, la documentación interactiva de Swagger queda disponible en `http://localhost:3000/swagger`.

## Ejemplos de endpoints

Todas las entidades exponen las mismas 5 operaciones: `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id`.

### Productos

```
GET    /api/products
GET    /api/products/1
POST   /api/products
PUT    /api/products/1
DELETE /api/products/1
```

Body de ejemplo para `POST /api/products`:

```json
{
  "name": "Arroz con Pollo Colombiano",
  "description": "Arroz sazonado tradicional con pollo desmechado, verduras de la huerta y servido con papas fritas crocantes.",
  "price": 22000,
  "stock": 30
}
```


```

### Usuarios

```
GET    /api/users
GET    /api/users/1
POST   /api/users
PUT    /api/users/1
DELETE /api/users/1
```

Body de ejemplo para `POST /api/users`:

```json
{
   "idNumber": "1122334455",
  "name": "Andrés",
  "lastName": "Silva",
  "email": "andres.silva@marketsoft.com",
  "password": "Total123*",
  "role": "employee"
}
```

### Ventas

El total (`totalAmount`) se calcula automáticamente sumando `cantidad x precio` de cada producto incluido, y el stock de cada producto se descuenta al momento de crear la venta.

```
GET    /api/sales
GET    /api/sales/1
POST   /api/sales
PUT    /api/sales/1
DELETE /api/sales/1
```

Body de ejemplo para `POST /api/sales`:

```json
 {
  "userId": 1,
  "products": [
    {
      "productId": 2,
      "quantity": 1
    },
    {
      "productId": 4,
      "quantity": 1
    }
  ]
}
```

### Detalle de venta

Permite agregar, modificar o eliminar un producto puntual dentro de una venta ya existente; mantiene sincronizado el stock del producto y el total de la venta.

```
GET    /api/sale-products
GET    /api/sale-products/1
POST   /api/sale-products
PUT    /api/sale-products/1
DELETE /api/sale-products/1
```

Body de ejemplo para `POST /api/sale-products`:

```json
{
  "saleId": 1,
  "productId": 2,
  "quantity": 3
}
```

## Validaciones implementadas

- Productos: precio mínimo mayor a 0, stock nunca negativo, debe estar asociado a un proveedor existente
- Usuarios: email único, contraseña con reglas de fortaleza mínima.
- Ventas: el total nunca se recibe desde el cliente, siempre se calcula a partir de los productos vendidos
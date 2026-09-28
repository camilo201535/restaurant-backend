const express = require ('express')
const ProductController = require ('../controllers/product.controller')


const  router = express.Router()
//  locallhost:3000/api/products



/**
 *  @swagger
 *  tags:
 *   name: Products
 *   description :API FOR MANAGING PRODUCTS 
 *
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - stock
 *       properties:
 *         productId:
 *           type: integer
 *           description: ID autoincremental del producto
 *           example: 1
 *         name:
 *           type: string
 *           description: Nombre del plato colombiano
 *           example: "Bandeja Paisa"
 *         description:
 *           type: string
 *           description: Ingredientes y componentes del plato
 *           example: "Frijoles, arroz, carne molida, chicharrón, huevo frito, tajada, chorizo y aguacate."
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del producto en COP
 *           example: 32000.00
 *         stock:
 *           type: integer
 *           description: Cantidad de porciones disponibles
 *           example: 15
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     description: Retorna una lista con todos los platos y bebidas disponibles.
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Products retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
router.get('/', ProductController.getAllProducts)

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Products]
 *     description: Retorna los detalles de un plato específico usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico del producto a buscar
 *         example: 1
 *     responses:
 *       200:
 *         description: Producto encontrado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */
router.get('/:id', ProductController.getProductById)

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     description: Registra un nuevo plato típico en el menú.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Ajiaco Santafereño"
 *               description:
 *                 type: string
 *                 example: "Sopa tradicional con tres tipos de papa, pollo desmechado, alcaparras y crema de leche."
 *               price:
 *                 type: number
 *                 example: 28000.00
 *               stock:
 *                 type: integer
 *                 example: 20
 *     responses:
 *       200:
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */
router.post('/', ProductController.createProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Products]
 *     description: Modifica los datos de un plato buscando por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a modificar
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 example: 35000.00
 *               stock:
 *                 type: integer
 *                 example: 25
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */
router.put('/:id', ProductController.updateProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     description: Realiza un borrado lógico del producto en el menú.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Producto eliminado de forma exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */



router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)
router.post('/', ProductController.createProduct)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)


module.exports = router
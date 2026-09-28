


const express = require ('express')
const SaleController = require ('../controllers/sale.controller')


const  router = express.Router()
//  locallhost:3000/api/sales



/**
 *  @swagger
 *  tags:
 *   name: Sales
 *   description: API FOR MANAGING SALES 
 *
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       required:
 *         - userId
 *         - products
 *       properties:
 *         saleId:
 *           type: integer
 *           description: ID autoincremental de la venta
 *           example: 1
 *         userId:
 *           type: integer
 *           description: ID del usuario que registra la venta
 *           example: 1
 *         saleDate:
 *           type: string
 *           format: date-time
 *           description: Fecha en la que se realizó la venta
 *           example: "2026-09-27T10:00:00.000Z"
 *         totalAmount:
 *           type: number
 *           description: Total de la venta, calculado automáticamente a partir de los productos
 *           example: 85000.00
 *         products:
 *           type: array
 *           description: Productos incluidos en la venta (solo para creación)
 *           items:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 2
 */

/**
 * @swagger
 * /api/sales:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Sales]
 *     description: Retorna una lista con todas las ventas registradas, incluyendo su usuario y detalle de productos.
 *     responses:
 *       200:
 *         description: Ventas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sales retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Sale'
 */


/**
 * @swagger
 * /api/sales/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Sales]
 *     description: Retorna los detalles de una venta específica usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico de la venta a buscar
 *         example: 1
 *     responses:
 *       200:
 *         description: Venta encontrada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 */


/**
 * @swagger
 * /api/sales:
 *   post:
 *     summary: Registrar una nueva venta
 *     tags: [Sales]
 *     description: Registra una venta con uno o varios productos. El total se calcula automáticamente sumando cantidad x precio de cada producto, y se descuenta el stock correspondiente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - products
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       200:
 *         description: Venta registrada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 */

/**
 * @swagger
 * /api/sales/{id}:
 *   put:
 *     summary: Actualizar una venta existente
 *     tags: [Sales]
 *     description: Modifica el usuario o la fecha de una venta. El total no se puede modificar manualmente, siempre se recalcula a partir del detalle de productos.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a modificar
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Venta actualizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 */


/**
 * @swagger
 * /api/sales/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Sales]
 *     description: Realiza un borrado lógico de la venta en el sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Venta eliminada de forma exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 */
router.delete('/:id', SaleController.deleteSale)
router.put('/:id', SaleController.updateSale)
router.post('/', SaleController.createSale)
router.get('/:id', SaleController.getSaleById)
router.get('/', SaleController.getAllSales)



module.exports = router

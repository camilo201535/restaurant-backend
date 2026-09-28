

const express = require ('express')
const SaleProductController = require ('../controllers/saleProduct.controller')


const  router = express.Router()
//  locallhost:3000/api/sale-products



/**
 *  @swagger
 *  tags:
 *   name: SaleProducts
 *   description: API FOR MANAGING SALE DETAILS 
 *
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     SaleProduct:
 *       type: object
 *       required:
 *         - saleId
 *         - productId
 *         - quantity
 *       properties:
 *         saleId:
 *           type: integer
 *           description: ID de la venta a la que pertenece el detalle
 *           example: 1
 *         productId:
 *           type: integer
 *           description: ID del producto vendido
 *           example: 1
 *         quantity:
 *           type: integer
 *           description: Cantidad vendida del producto
 *           example: 2
 *         price:
 *           type: number
 *           description: Precio unitario del producto al momento de la venta, tomado automáticamente del producto
 *           example: 32000.00
 */

/**
 * @swagger
 * /api/sale-products:
 *   get:
 *     summary: Obtener todos los detalles de venta
 *     tags: [SaleProducts]
 *     description: Retorna una lista con todos los detalles de venta registrados.
 *     responses:
 *       200:
 *         description: Detalles obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale details retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SaleProduct'
 */


/**
 * @swagger
 * /api/sale-products/{id}:
 *   get:
 *     summary: Obtener un detalle de venta por ID
 *     tags: [SaleProducts]
 *     description: Retorna los detalles de un ítem de venta específico usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico del detalle a buscar
 *         example: 1
 *     responses:
 *       200:
 *         description: Detalle encontrado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale detail retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/SaleProduct'
 */


/**
 * @swagger
 * /api/sale-products:
 *   post:
 *     summary: Agregar un producto a una venta existente
 *     tags: [SaleProducts]
 *     description: Crea un nuevo ítem de venta, descuenta el stock del producto y actualiza el total de la venta automáticamente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - saleId
 *               - productId
 *               - quantity
 *             properties:
 *               saleId:
 *                 type: integer
 *                 example: 1
 *               productId:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Detalle de venta creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale detail created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/SaleProduct'
 */


/**
 * @swagger
 * /api/sale-products/{id}:
 *   put:
 *     summary: Actualizar la cantidad de un detalle de venta
 *     tags: [SaleProducts]
 *     description: Modifica la cantidad de un ítem de venta, ajustando el stock del producto y el total de la venta.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del detalle a modificar
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Detalle actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale detail updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/SaleProduct'
 */


/**
 * @swagger
 * /api/sale-products/{id}:
 *   delete:
 *     summary: Eliminar un detalle de venta
 *     tags: [SaleProducts]
 *     description: Elimina un ítem de venta, devolviendo el stock al producto y descontando el monto del total de la venta.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del detalle a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Detalle eliminado de forma exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sale detail deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/SaleProduct'
 */
router.delete('/:id', SaleProductController.deleteSaleProduct)
router.put('/:id', SaleProductController.updateSaleProduct)
router.post('/', SaleProductController.createSaleProduct)
router.get('/:id', SaleProductController.getSaleProductById)
router.get('/', SaleProductController.getAllSaleProducts)

module.exports = router

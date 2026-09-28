

const express = require ('express')
const ProviderController = require ('../controllers/provider.controller')


const  router = express.Router()
//  locallhost:3000/api/providers



/**
 *  @swagger
 *  tags:
 *   name: Providers
 *   description: API FOR MANAGING PROVIDERS 
 *
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - city
 *       properties:
 *         providerId:
 *           type: integer
 *           description: ID autoincremental del proveedor
 *           example: 1
 *         name:
 *           type: string
 *           description: Nombre del proveedor
 *           example: "Distribuidora La Cosecha"
 *         phone:
 *           type: string
 *           description: Teléfono de contacto del proveedor
 *           example: "3105551234"
 *         email:
 *           type: string
 *           description: Correo de contacto del proveedor
 *           example: "contacto@lacosecha.com"
 *         city:
 *           type: string
 *           description: Ciudad donde opera el proveedor
 *           example: "Bogotá"
 */

/**
 * @swagger
 * /api/providers:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Providers]
 *     description: Retorna una lista con todos los proveedores registrados.
 *     responses:
 *       200:
 *         description: Proveedores obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Providers retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Provider'
 */


/**
 * @swagger
 * /api/providers/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Providers]
 *     description: Retorna los detalles de un proveedor específico usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico del proveedor a buscar
 *         example: 1
 *     responses:
 *       200:
 *         description: Proveedor encontrado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Provider retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 */

/**
 * @swagger
 * /api/providers:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Providers]
 *     description: Registra un nuevo proveedor en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - email
 *               - city
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Distribuidora La Cosecha"
 *               phone:
 *                 type: string
 *                 example: "3105551234"
 *               email:
 *                 type: string
 *                 example: "contacto@lacosecha.com"
 *               city:
 *                 type: string
 *                 example: "Bogotá"
 *     responses:
 *       200:
 *         description: Proveedor creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Provider created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 */


/**
 * @swagger
 * /api/providers/{id}:
 *   put:
 *     summary: Actualizar un proveedor existente
 *     tags: [Providers]
 *     description: Modifica los datos de un proveedor buscando por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a modificar
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "3205559876"
 *               city:
 *                 type: string
 *                 example: "Medellín"
 *     responses:
 *       200:
 *         description: Proveedor actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Provider updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 */


/**
 * @swagger
 * /api/providers/{id}:
 *   delete:
 *     summary: Eliminar un proveedor
 *     tags: [Providers]
 *     description: Realiza un borrado lógico del proveedor en el sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Proveedor eliminado de forma exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Provider deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 */
router.delete('/:id', ProviderController.deleteProvider)
router.put('/:id', ProviderController.updateProvider)
router.post('/', ProviderController.createProvider)
router.get('/:id', ProviderController.getProviderById)
router.get('/', ProviderController.getAllProviders)




module.exports = router




const express = require ('express')
const UserController = require ('../controllers/user.controller')


const  router = express.Router()
//  locallhost:3000/api/users



/**
 *  @swagger
 *  tags:
 *   name: Users
 *   description: API FOR MANAGING USERS 
 *
 * 
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - idNumber
 *         - name
 *         - lastName
 *         - email
 *         - password
 *       properties:
 *         userId:
 *           type: integer
 *           description: ID autoincremental del usuario
 *           example: 1
 *         idNumber:
 *           type: string
 *           description: Número de identificación del usuario
 *           example: "1020304050"
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *           example: "Camilo"
 *         lastName:
 *           type: string
 *           description: Apellido del usuario
 *           example: "Galarza"
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *           example: "camilo@marketsoft.com"
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *           example: "Abc12345#"
 *         role:
 *           type: string
 *           description: Rol del usuario dentro del sistema
 *           example: "employee"
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     description: Retorna una lista con todos los usuarios registrados.
 *     responses:
 *       200:
 *         description: Usuarios obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Users retrieved successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     description: Retorna los detalles de un usuario específico usando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID numérico del usuario a buscar
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User retrieved successfully"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     description: Registra un nuevo usuario en el sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idNumber
 *               - name
 *               - lastName
 *               - email
 *               - password
 *             properties:
 *               idNumber:
 *                 type: string
 *                 example: "1020304050"
 *               name:
 *                 type: string
 *                 example: "Camilo"
 *               lastName:
 *                 type: string
 *                 example: "Galarza"
 *               email:
 *                 type: string
 *                 example: "camilo@marketsoft.com"
 *               password:
 *                 type: string
 *                 example: "Abc12345#"
 *               role:
 *                 type: string
 *                 example: "employee"
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     tags: [Users]
 *     description: Modifica los datos de un usuario buscando por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a modificar
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Camilo"
 *               role:
 *                 type: string
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 */


/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Users]
 *     description: Realiza un borrado lógico del usuario en el sistema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *         example: 1
 *     responses:
 *       200:
 *         description: Usuario eliminado de forma exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 */


router.delete('/:id', UserController.deleteUser)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.get('/:id', UserController.getUserById)
router.get('/', UserController.getAllUsers)


module.exports = router

 
const swaggerjsdoc = require('swagger-jsdoc')

 const options = {

            definition:{
                openapi: '3.0.0',

                info:{

                    title:' Restaurant API',
                    version:'1.0.0',

                    description:'API for managing restaurant data'
                },

                server :[

                    {
                        url:'http://localhost:3000',
                        description: 'Development server '
                    }
                ]
            },


            apis: [ './src/routes/*.js']
 }


 const swaggerSpec = swaggerjsdoc(options)

 module.exports = swaggerSpec
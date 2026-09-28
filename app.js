const express =require('express')

const DatabaseSync = require('./src/config/sync')

const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./src/config/swagger')


const productRoutes = require('./src/routes/product.routes')
const providerRoutes = require('./src/routes/provider.routes')
const userRoutes = require('./src/routes/user.routes')
const saleRoutes = require('./src/routes/sale.routes')
const saleProductRoutes = require('./src/routes/saleProduct.routes')

const app = express()
const PORT =3000

console.log(process.env.NODE_ENV )

if(process.env.NODE_ENV === 'development') 

    app.use('/swagger', swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/providers',providerRoutes)          
app.use('/api/users',userRoutes)          
app.use('/api/sales',saleRoutes)          
app.use('/api/sale-products',saleProductRoutes)                 

app.get('/',(req,res) => {

    res.send('Server is running successfully')
})


 async  function startServer(){

    try{


        await DatabaseSync.sync()



        app.listen(PORT,()=>{

         console.log(`Server  running at http://localhost:${PORT}` )

        })  


         }catch(error){

            console.log('Error starting  the server : ',error)

    }
 }

 startServer()
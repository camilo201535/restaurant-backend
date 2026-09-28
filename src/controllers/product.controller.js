const ProductService =require('../services/product.service')


class ProductController{

    static async getAllProducts( req, res) {

        try{

            const products = await ProductService.getAllProducts()
            return res.status(200).json({

                message: 'Products retrieved sucessfully',
                data : products
            })

        }catch(error){

            return res.status(500).json({

                message:error.message
            })
        }
    }


    static async getProductById(req, res){

        try{

            const { id } = req.params

            const product = await ProductService.getProductById(id)
            return res.status(200).json ({
                message : 'Product retrieved sucessfully',
                data: product
            })

        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
    }


     static async createProduct(req, res ){
        try{

            const productData = req.body
            const product = await ProductService.createProduct(productData) 

            return res.status(200).json({

                message: 'Product created successfully',
                data
            })

        }catch(error){
             return res.status(500).json({
                message: error.message
            })

        }
     }


     static async updateProduct(req, res){

        try{

            const { id } = req.params

            const productData = req.body

            const product = ProductService.updateProduct(id, productData)

            return res.status(200).json({

                message:' Product updated successfully',

                data: product
            })


        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
     }

     static async  deleteProduct(req, res){

        try{

            const {id} = req.params
            const product = await ProductService.deleteProduct(id)


            return res.status(200).json({

                message: 'Product deleted successfully',
                data : product

            })



        }catch(error){

                return res.status(500).json({
                message: error.message
            })
        }


     }
}

module.exports = ProductController
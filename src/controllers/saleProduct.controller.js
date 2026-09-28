const SaleProductService =require('../services/saleProduct.service')


class SaleProductController{

    static async getAllSaleProducts( req, res) {

        try{

      const saleProducts = await SaleProductService.getAllSaleProducts()
            return res.status(200).json({

                message: 'Sale details retrieved sucessfully',
                data : saleProducts
            })

        }catch(error){

  return res.status(500).json({

                message:error.message
            })
        }
    }


    static async getSaleProductById(req, res){

        try{

            const { id } = req.params

            const saleProduct = await SaleProductService.getSaleProductById(id)
            return res.status(200).json ({
                message : 'Sale detail retrieved sucessfully',
                data: saleProduct
            })

        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
    }


     static async createSaleProduct(req, res ){
        try{

            const saleProductData = req.body
            const saleProduct = await SaleProductService.createSaleProduct(saleProductData) 

            return res.status(200).json({

                message: 'Sale detail created successfully',
                data: saleProduct
            })

        }catch(error){
             return res.status(500).json({
                message: error.message
            })

        }
     }


     static async updateSaleProduct(req, res){

        try{

            const { id } = req.params

            const saleProductData = req.body

            const saleProduct = await SaleProductService.updateSaleProduct(id, saleProductData)

            return res.status(200).json({

                message:' Sale detail updated successfully',

                data: saleProduct
            })


        }catch(error){

            return res.status(500).json({
                message: error.message
    })

        }
     }

     static async  deleteSaleProduct(req, res){

        try{

            const {id} = req.params
            const saleProduct = await SaleProductService.deleteSaleProduct(id)


            return res.status(200).json({

                message: 'Sale detail deleted successfully',
                data : saleProduct

     })



        }catch(error){

                return res.status(500).json({
                message: error.message
            })
        }


     }
}

module.exports = SaleProductController

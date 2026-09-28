const SaleService =require('../services/sale.service')


class SaleController{

    static async getAllSales( req, res) {

        try{

            const sales = await SaleService.getAllSales()
            return res.status(200).json({

                message: 'Sales retrieved sucessfully',
                data : sales
            })

        }catch(error){

            return res.status(500).json({

                message:error.message
            })
        }
    }


    static async getSaleById(req, res){

        try{

            const { id } = req.params

            const sale = await SaleService.getSaleById(id)
            return res.status(200).json ({
                message : 'Sale retrieved sucessfully',
                data: sale
            })

        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
    }


     static async createSale(req, res ){
        try{

            const saleData = req.body
            const sale = await SaleService.createSale(saleData) 

            return res.status(200).json({

                message: 'Sale created successfully',
                data: sale
            })

        }catch(error){
             return res.status(500).json({
                message: error.message
            })

        }
     }


     static async updateSale(req, res){

        try{

            const { id } = req.params

            const saleData = req.body

            const sale = await SaleService.updateSale(id, saleData)

            return res.status(200).json({

                message:' Sale updated successfully',

                data: sale
            })


        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
     }

     static async  deleteSale(req, res){

        try{

            const {id} = req.params
            const sale = await SaleService.deleteSale(id)


            return res.status(200).json({

                message: 'Sale deleted successfully',
                data : sale

            })



        }catch(error){

                return res.status(500).json({
                message: error.message
            })
        }


     }
}

module.exports = SaleController

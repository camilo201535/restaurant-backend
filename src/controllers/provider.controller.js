
const ProviderService = require ('../services/product.service')

 
class ProviderController{



static async getAllProviders( req, res) {



        try{

            const providers = await ProviderService.getAllProviders()
            return res.status(200).json({

                message: 'Providers retrieved sucessfully',
                data : providers
            })

        }catch(error){

            return res.status(500).json({

                message:error.message
            })
        }
    }


    static async getProviderById(req, res){

        try{

            const { id } = req.params

            const provider = await ProviderService.getProviderById(id)
            return res.status(200).json ({
                message : 'Provider retrieved sucessfully',
                data: provider
            })

        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
    }


     static async createProvider(req, res ){
        try{

            const providerData = req.body
            const provider = await ProviderService.createProvider(providerData) 

            return res.status(200).json({

                message: 'Provider created successfully',
                data: provider
            })

        }catch(error){
             return res.status(500).json({
                message: error.message
            })

        }
     }


     static async updateProvider(req, res){

        try{

            const { id } = req.params

            const providerData = req.body

            const provider = await ProviderService.updateProvider(id, providerData)

            return res.status(200).json({

                message:' Provider updated successfully',

                data: provider
            })


        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
     }

     static async  deleteProvider(req, res){

        try{

            const {id} = req.params
            const provider = await ProviderService.deleteProvider(id)


            return res.status(200).json({

                message: 'Provider deleted successfully',
                data : provider

            })



        }catch(error){

                return res.status(500).json({
                message: error.message
            })
        }


     }
}

module.exports = ProviderController



const { Provider } = require ('../models')
const { Op } = require ('sequelize')

class ProviderService{

    static async getAllProviders(){

        return await  Provider.findAll({

            order:[['name','ASC']]
        })
    }


    static  async getProviderById(id){
         const provider = await Provider.findByPk(id)

         if(!provider){
            throw new Error('Provider not found')
         }


         return provider 
    }

    static async createProvider(providerData){
        const {name,phone,email,city} = providerData
        const existingProvider =await Provider.findOne({where :{email}})

        if(existingProvider){

            throw new Error ('Provider already exists')
        }


        const provider = await Provider.create({
            name,
            phone,
            email,
            city

        })


        const createdProvider = provider.toJSON()
        return createdProvider 
    }

    static async updateProvider(id,providerData){

        const provider = await Provider.findByPk(id)


        if(!provider){

            throw new Error ('Provider not found')
        }


        const {name,phone,email,city} = providerData


        if(email){

             const existingEmail = await Provider.findOne( {where :{email, providerId:{[Op.ne] : id}}})
                if(existingEmail){

                    throw new Error ('Provider email already exists')
                }

        }

        await provider.update(providerData)

        const updatedProvider = provider.toJSON()
        return updatedProvider

    }
            static async deleteProvider(id){
            
                const provider =await Provider.findByPk(id)

                if(!provider){
                    throw new Error('Provider not found')
                }

                await provider.destroy()

                return {message : 'Provider deleted sucessfully'}
            }

}

module.exports = ProviderService

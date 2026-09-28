
const { Sale, SaleProduct, Product, User, sequelize } = require ('../models')

class SaleService{

    static async getAllSales(){

        return await Sale.findAll({

            include: [
                { model: User, as: 'user', attributes:{ exclude:['password']} },
                { model: SaleProduct, as: 'saleProducts', include: [ { model: Product, as: 'product' } ] }
            ],
            order:[['saleDate','DESC']]
        })
    }


    static  async getSaleById(id){

         const sale = await Sale.findByPk(id, {

            include: [
                { model: User, as: 'user', attributes:{ exclude:['password']} },
                { model: SaleProduct, as: 'saleProducts', include: [ { model: Product, as: 'product' } ] }
            ]
         })

         if(!sale){
            throw new Error('Sale not found')
         }


         return sale 
    }

    static async createSale(saleData){

        const { userId, products } = saleData

        const user = await User.findByPk(userId)

        if(!user){
            throw new Error('User not found')
        }

        if(!products || products.length === 0){
            throw new Error('Sale must include at least one product')
        }

        const createdSale = await sequelize.transaction( async (t) => {

            const sale = await Sale.create({ userId, totalAmount: 0 }, { transaction: t })

            let totalAmount = 0

            for(const item of products){

                const { productId, quantity } = item

                const product = await Product.findByPk(productId, { transaction: t })

                if(!product){
                    throw new Error(`Product with id ${productId} not found`)
                }

                if(product.stock < quantity){
                    throw new Error(`Insufficient stock for product ${product.name}`)
                }

                await SaleProduct.create({

                    saleId: sale.saleId,
                    productId: product.productId,
                    quantity,
                    price: product.price

                }, { transaction: t })

                await product.update({ stock: product.stock - quantity }, { transaction: t })

                totalAmount += parseFloat(product.price) * quantity
            }

            await sale.update({ totalAmount }, { transaction: t })

            return sale
        })

        return await SaleService.getSaleById(createdSale.saleId)
    }

    static async updateSale(id,saleData){

        const sale = await Sale.findByPk(id)


        if(!sale){

            throw new Error ('Sale not found')
        }


        const {userId,saleDate} = saleData


        if(userId){

             const user = await User.findByPk(userId)
                if(!user){

                    throw new Error ('User not found')
                }

        }

        await sale.update({ userId, saleDate })

        return await SaleService.getSaleById(sale.saleId)

    }
            static async deleteSale(id){
            
                const sale =await Sale.findByPk(id)

                if(!sale){
                    throw new Error('Sale not found')
                }

                await sale.destroy()

                return {message : 'Sale deleted sucessfully'}
            }

}

module.exports = SaleService


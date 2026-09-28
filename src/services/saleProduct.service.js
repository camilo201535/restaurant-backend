

const { SaleProduct, Product, Sale } = require ('../models')

class SaleProductService{

    static async getAllSaleProducts(){

        return await SaleProduct.findAll({

            include: [
                { model: Product, as: 'product' },
                { model: Sale, as: 'sale' }
            ]
        })
    }


    static  async getSaleProductById(id){

         const saleProduct = await SaleProduct.findByPk(id, {

            include: [
                { model: Product, as: 'product' },
                { model: Sale, as: 'sale' }
            ]
         })

         if(!saleProduct){
            throw new Error('Sale detail not found')
         }


         return saleProduct 
    }

    static async createSaleProduct(saleProductData){

        const { saleId, productId, quantity } = saleProductData

        const sale = await Sale.findByPk(saleId)

        if(!sale){
            throw new Error ('Sale not found')
        }

        const product = await Product.findByPk(productId)

        if(!product){
            throw new Error ('Product not found')
        }

        if(product.stock < quantity){
            throw new Error ('Insufficient stock for this product')
        }

        const saleProduct = await SaleProduct.create({

            saleId,
            productId,
            quantity,
            price: product.price
        })

        await product.update({ stock: product.stock - quantity })

        const newTotal = parseFloat(sale.totalAmount) + (parseFloat(product.price) * quantity)
        await sale.update({ totalAmount: newTotal })

        const createdSaleProduct = saleProduct.toJSON()
        return createdSaleProduct 
    }

    static async updateSaleProduct(id,saleProductData){

        const saleProduct = await SaleProduct.findByPk(id)


        if(!saleProduct){

            throw new Error ('Sale detail not found')
        }


        const {quantity} = saleProductData


        if(quantity){

             const product = await Product.findByPk(saleProduct.productId)
             const sale = await Sale.findByPk(saleProduct.saleId)

             const quantityDifference = quantity - saleProduct.quantity

                if(product.stock < quantityDifference){

                    throw new Error ('Insufficient stock for this product')
                }

                await product.update({ stock: product.stock - quantityDifference })

                const totalDifference = parseFloat(saleProduct.price) * quantityDifference
                await sale.update({ totalAmount: parseFloat(sale.totalAmount) + totalDifference })

        }

        await saleProduct.update({ quantity })

        const updatedSaleProduct = saleProduct.toJSON()
        return updatedSaleProduct

    }
            static async deleteSaleProduct(id){
            
                const saleProduct =await SaleProduct.findByPk(id)

                if(!saleProduct){
                    throw new Error('Sale detail not found')
                }

                const product = await Product.findByPk(saleProduct.productId)
                const sale = await Sale.findByPk(saleProduct.saleId)

                if(product){
                    await product.update({ stock: product.stock + saleProduct.quantity })
                }

                if(sale){
                    const newTotal = parseFloat(sale.totalAmount) - (parseFloat(saleProduct.price) * saleProduct.quantity)
                    await sale.update({ totalAmount: newTotal < 0 ? 0 : newTotal })
                }

                await saleProduct.destroy()

                return {message : 'Sale detail deleted sucessfully'}
            }

}

module.exports = SaleProductService

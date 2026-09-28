
    const sequelize =require ('./database.js')
    require ('../models/index')


    class DatabaseSync{

            static async sync(){

                try{
                        await sequelize.authenticate()
                        .then(()=>{
                            sequelize.authenticate()
                            .then( () => {

                                console.log('Data base connection established successfully')
                            } )  .catch((error )=>{

                                    console.error('Unable to connect to the database', error )})})

                                    await sequelize.sync({alter: false})

                                    console.log('Data synchronized successfully')
                                }catch (error){

                    console.log('Error synchronized  the database : ', error )


                }

            }
    }


    module.exports = DatabaseSync

    
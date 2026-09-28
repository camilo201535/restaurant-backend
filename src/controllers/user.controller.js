const UserService =require('../services/user.service')


class UserController{

    static async getAllUsers( req, res) {

        try{

            const users = await UserService.getAllUsers()
            return res.status(200).json({

                message: 'Users retrieved sucessfully',
                data : users
            })

        }catch(error){

            return res.status(500).json({

                message:error.message
            })
        }
    }


    static async getUserById(req, res){

        try{

            const { id } = req.params

            const user = await UserService.getUserById(id)
            return res.status(200).json ({
                message : 'User retrieved sucessfully',
                data: user
            })

        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
    }


     static async createUser(req, res ){
        try{

            const userData = req.body
            const user = await UserService.createUser(userData) 

            return res.status(200).json({

                message: 'User created successfully',
                data: user
            })

        }catch(error){
             return res.status(500).json({
                message: error.message
            })

        }
     } 


     static async updateUser(req, res){

        try{

            const { id } = req.params

            const userData = req.body

            const user = await UserService.updateUser(id, userData)

            return res.status(200).json({

                message:' User updated successfully',

                data: user
            })


        }catch(error){

            return res.status(500).json({
                message: error.message
            })

        }
     }

     static async  deleteUser(req, res){

        try{

            const {id} = req.params
            const user = await UserService.deleteUser(id)


            return res.status(200).json({

                message: 'User deleted successfully',
                data : user

            })



        }catch(error){

                return res.status(500).json({
                message: error.message
            })
        }


     }
}

module.exports = UserController

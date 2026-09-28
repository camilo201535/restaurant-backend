const  { DataTypes}  = require('sequelize')
const sequelize = require ('../config/database')

const Provider = sequelize.define('provider',{

    providerId:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true

    },

    name:{

        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
                msg: 'Provider name already  exists'
        },

        validate:{
              notEmpty:{

                msg: 'Provider name  cannot be empty'
            },

            len:{

                args:[3,100],
                msg: 'Provider name   must be between  3 and 100 characters'

            }
        }
    },

    phone: {

        type: DataTypes.STRING(20),
        allowNull: false,

        validate:{

            notEmpty:{

                msg: 'Provider phone  can  not be empty'
            },

            len:{

                args:[7,20],
                msg: 'Provider phone  must be between  7 and 20 characters'
            }
        }

    },

    email: {

        type: DataTypes.STRING,
        allowNull: false,
        unique: {
                msg: 'Provider email already  exists'
        },

        validate:{

            isEmail:{
                msg: 'Provider email format  is invalid'
            },

            notEmpty:{

                msg: 'Provider email  can  not be empty'
            }
        }

    },

    city: {

        type: DataTypes.STRING(60),
        allowNull: false,

        validate:{

            notEmpty:{

                msg: 'Provider city  can  not be empty'
            }
        }

    }

},{

    tableName: 'provider',
    timestamps: 'true',
    paranoid: true

})


module.exports = Provider

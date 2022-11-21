
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Stock = db.define('stock', {

    stockUId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    stockCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    stockName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    stockBrand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },
    stockColor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },

    purchaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    purchaseFrom: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },



    cost: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },


    assignedTo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },
    
    staffId: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    department: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },
    giver: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    dateGiven: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },


    status: {
       type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,

        }
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        }
    },







    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },





    stockRecoder: {
        type: DataTypes.STRING,
         allowNull: false,
         validate: {
             notEmpty: true,
 
         }
     },


     recoderIp: {
        type: DataTypes.STRING,
         allowNull: false,
         validate: {
             notEmpty: true,
 
         }
     },
    //  recoderAction, recoderLocation, recoderIp, stockRecoder,

     recoderLocation: {
        type: DataTypes.STRING,
         allowNull: false,
         validate: {
             notEmpty: true,
 
         }
     },

     recoderAction: {
        type: DataTypes.STRING,
         allowNull: false,
         validate: {
             notEmpty: true,
 
         }
     },



     assignerIp: {
        type: DataTypes.STRING,
         allowNull: true,
         validate: {
             notEmpty: false,
 
         }
     },


     assignerLocation: {
        type: DataTypes.STRING,
         allowNull: true,
         validate: {
             notEmpty: false,
 
         }
     },

     

     assignerAction: {
        type: DataTypes.STRING,
         allowNull: true,
         validate: {
             notEmpty: false,
 
         }
     },



},



    {
        freezeTableName: true
    });

Users.hasMany(Stock);
Stock.belongsTo(Users, { foreignKey: 'userId' });



export default Stock;
// (async () => {
//     await db.sync();
// })();





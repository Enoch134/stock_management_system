import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const StockIn = db.define('stockIn', {
   
   
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
        type: DataTypes.DATE,
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

    
    // assignedTo:assignedTo,
    // staffId:staffId,
    // department:department,
    // giver:giver,
    // dateGiven:dateGiven,








    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

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
},



    {
        freezeTableName: true
    });

// Users.hasMany(Stock);
// Stock.belongsTo(Users, { foreignKey: 'userId' });



// export default Stock;
// // (async () => {
// //     await db.sync();
// // })();





   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
//     stockId: {
//         type: DataTypes.STRING,
//         // autoIncrement: true,
//         // primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     },
//     stockCode: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },

//     stockImage: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,
//             len: [4, 100]
//         }
//     },

//     stockName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,
//             len: [5, 100]
//         }
//     },

//     category: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },


//     stockBrand: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },
//     stockColor: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },

//     purchaseDate: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         validate: {
//             notEmpty: true,
//             len: [4, 100]
//         }
//     },


//     purchaseFrom: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,
//             len: [5, 100]
//         }
//     },



//     cost: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },


//     quantity: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },


//     status: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true,

//         }
//     },


//     userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     }
// },


    // {
    //     freezeTableName: true
    // });

Users.hasMany(StockIn);
StockIn.belongsTo(Users, { foreignKey: 'userId' });

export default StockIn;
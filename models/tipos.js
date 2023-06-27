const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Tipos extends Model{}
Tipos.init({
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
      }

},{
    sequelize,
    modelName:'tipos'
  }
)
sequelize.sync()
 module.exports = Tipos  


 //https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/


//hasOne (tem um) 1 para 1
//belongsTo (pertence a) 1 para 1
//hasMany (tem muitos) 1 para N
//belongsToMany (pertence a muitos) N para N



const { DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
class Usuario extends Model{}
Usuario.init({
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
    
      email: {
        type: DataTypes.STRING(50),
        allowNull:false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull:false
      }
},{
    sequelize,
    modelName:'usuario'
  }
)
sequelize.sync()
 module.exports = Usuario   

/*

{
    "nome":"José",
    "cpf": "781.222.44-30",
    "telefone":"17997826667",
    "whatsapp":"551799996666",
    "email":"josé@teste.com",
    "senha":"1247"
}

*/
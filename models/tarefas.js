const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../bd')
const usuario = require('./usuario')
const tipos = require('./tipos')
class Tarefa extends Model{}
Tarefa.init({
    data_cadastro: {
        type:Sequelize.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      data_conclusao:{
        type:Sequelize.DATEONLY,
        allowNull: true
      },
      prioridade: {
        type: DataTypes.STRING,
        defaultValue:"Cadastrada"
      }
    },{
      sequelize,
      modelName:'tarefas'
    }
  )
  
  tipos.hasOne(Tarefa) //Muitos Pets tem muitas Doações - M-p-M
  Tarefa.belongsTo(tipos)

  usuario.hasMany(Tarefa)
  Tarefa.belongsTo(usuario)

  sequelize.sync()
   module.exports = Tarefa


    //https://sequelize.org/docs/v6/core-concepts/model-basics/
   //https://sequelize.org/docs/v6/advanced-association-concepts/creating-with-associations/

//hasOne (tem um) 1 para 1
//belongsTo (pertence a) 1 para 1
//hasMany (tem muitos) 1 para N
//belongsToMany (pertence a muitos) N para N


/*
    {
      "data_interesse":"2022-10-19",
      "data_doacao":"2022-10-19",
      "usuarioId":2,
      "petId":1
    }

*/
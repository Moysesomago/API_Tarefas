const model = new require('../../models/tarefas')
const usuario = new require('../../models/usuario')
const tipos = new require('../../models/tipos')

const rota = 'tarefas'
module.exports = (app)=>{

    app.get(`/consultar/${rota}/:id?`, async (req, res) => {
        //implementar transação dados com o sequelize
        try{
            let dados = req.params.id? 
            await model.findOne({include:[{model:usuario},{model:tipos}]}, {where:{id:req.params.id}}) :
            await model.findAll({include:[{model:usuario},{model:tipos}]},{raw:true,order:[['id','DESC']]})
            res.json(dados).status(200)
        } catch (error) {
            res.json(error).status(400)
        }
    })

    app.post(`/cadastrar/${rota}`, async (req, res) => {
        //implementar transação dados com o sequelize
        let dados = req.body
        let respBd = await model.create(dados)
        res.json(respBd)   
    })
    app.put(`/atualizar/${rota}/:id`, async (req, res) => {
        //implementar transação dados com o sequelize
        let id = req.params.id
        let dados = req.body
        let respBd = await model.update(dados, {where:{id:id}})
        res.json(respBd)
    })
    app.delete(`/excluir/${rota}/:id`, async (req, res) => {
        //implementar transação dados com o sequelize
        let id = req.params.id
        let respBd = await model.destroy({where:{id:id}})
        res.json(respBd)
    })
} 
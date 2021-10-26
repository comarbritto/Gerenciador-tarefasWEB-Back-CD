const TaskModel = require('../model/TaskModel');
//A controller faz o trafego, recebendo e enviando respostas
class TaskController{

    //método responsével por receber a requisiçãode armazenamento no banco de dados e criar esse armazenamento 
    async creat(req, res){
        //recebe a requisição de front
        const task = new TaskModel(req.body);
        //salva no banco de dados
        await task
        .save() 
        .then(response => {return res.status(200).jason(response)})
        .catch(error => {return res.status(500).jason(error)});

        //save() => metodo utilizado para salvar os dados que vem do front no banco de dados
        //then() => resposta positiva caso o salvamento for bem sucedido
        //catch() => tratamento de erro, caso for mal sucedido

    }
}
        module.exports = new TaskController();

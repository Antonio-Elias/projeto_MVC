const Task = require('../models/Task');


/**
 * Será responsavel para renderizar o formulario para a criação de tarefas neste momento não 
 * envolve o model por isso usei como static.
 */

module.exports = class TaskController{
    
    static createTask(req,res){
        res.render('tasks/create');
    };

    static async showTasks(req,res){
        const tasks = await Task.findAll({ raw:true });
        res.render('tasks/all', {tasks});
    };

    static async createTaskSave(req, res){
        console.log(req.body);
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        };

        //poderia ser implementado validações
        //poderia processar o dados 

        await Task.create(task);
        res.redirect('/tasks');
    };

    static async removeTask(req, res){
        const id = req.body.id;
        await Task.destroy({where: { id:id }});
        res.redirect('/tasks');
    };
};
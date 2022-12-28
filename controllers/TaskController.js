const Task = require('../models/Task');


/**
 * Será responsavel para renderizar o formulario para a criação de tarefas neste momento não 
 * envolve o model por isso usei como static.
 */

module.exports = class TaskController{
    
    static createTask(req,res){
        res.render('tasks/create');
    };

    static showTasks(req,res){
        res.render('tasks/all');
    };

    static async createTaskSave(req, res){

        console.log(req.body);
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        };

        //poderia ser implementado validaçãoe
        //poderia processar o dados 

        await Task.create(task);

        res.redirect('/tasks');
    }
};
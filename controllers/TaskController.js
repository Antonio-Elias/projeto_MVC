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
};
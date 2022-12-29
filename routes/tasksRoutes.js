const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.get('/', TaskController.showTasks);


module.exports = router;
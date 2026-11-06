import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try {
    const { completed } = req.query;

    let filter;
    if (completed !== undefined) {
      filter = completed === 'true';
    }

    const tasks = await taskService.getAllTasks(filter);

    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
}
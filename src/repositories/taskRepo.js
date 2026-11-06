import prisma from '../config/db.js';

export async function findAll(filter) {
  return prisma.task.findMany({
    where: { completed: filter },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

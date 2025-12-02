import { Task } from '@typesafe/shared';
import { db } from './db';

export const api = {
    tasks: {
        list: () => db.getTasks(),
        create: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => db.createTask(task),
        update: (id: string, updates: Partial<Task>) => db.updateTask(id, updates),
        delete: (id: string) => db.deleteTask(id),
    },
    users: {
        get: (id: string) => db.getUser(id),
    },
};

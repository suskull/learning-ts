import { Task, TaskStatus, User } from '@typesafe/shared';

const STORAGE_KEY = 'typesafe_db';

interface DBData {
    tasks: Task[];
    users: User[];
}

const INITIAL_DATA: DBData = {
    tasks: [
        {
            id: '1',
            title: 'Complete Module 1',
            description: 'Finish the TypeScript Fundamentals module',
            status: TaskStatus.TODO,
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: '2',
            title: 'Refactor API',
            description: 'Convert the API to use TypeScript',
            status: TaskStatus.IN_PROGRESS,
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
    users: [
        {
            id: '1',
            email: 'user@example.com',
            name: 'Demo User',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
};

export class FakeDatabase {
    private data: DBData;

    constructor() {
        this.data = this.load();
    }

    private load(): DBData {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Revive dates
            parsed.tasks.forEach((t: any) => {
                t.createdAt = new Date(t.createdAt);
                t.updatedAt = new Date(t.updatedAt);
            });
            parsed.users.forEach((u: any) => {
                u.createdAt = new Date(u.createdAt);
                u.updatedAt = new Date(u.updatedAt);
            });
            return parsed;
        }
        return INITIAL_DATA;
    }

    private save(): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    }

    async getTasks(): Promise<Task[]> {
        await this.delay();
        return [...this.data.tasks];
    }

    async createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
        await this.delay();
        const newTask: Task = {
            ...task,
            id: Math.random().toString(36).substring(7),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.data.tasks.push(newTask);
        this.save();
        return newTask;
    }

    async updateTask(id: string, updates: Partial<Task>): Promise<Task | null> {
        await this.delay();
        const index = this.data.tasks.findIndex((t) => t.id === id);
        if (index === -1) return null;

        const updatedTask = {
            ...this.data.tasks[index],
            ...updates,
            updatedAt: new Date(),
        } as Task;
        this.data.tasks[index] = updatedTask;
        this.save();
        return updatedTask;
    }

    async deleteTask(id: string): Promise<boolean> {
        await this.delay();
        const index = this.data.tasks.findIndex((t) => t.id === id);
        if (index === -1) return false;

        this.data.tasks.splice(index, 1);
        this.save();
        return true;
    }

    async getUser(id: string): Promise<User | null> {
        await this.delay();
        return this.data.users.find((u) => u.id === id) || null;
    }

    private delay(ms = 500): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

export const db = new FakeDatabase();

import { console } from "inspector";
import { Task } from "./Task.js";
import { STATUS } from "./TaskStatus.js";
import fs from 'fs/promises';

export class TaskRepository {
    constructor() {
        this.taskItems = [];
    }
    async addTask(description) {
        const id = this.getNextId();
        const task = new Task({
            id,
            description,
            status: STATUS.TODO,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        this.taskItems.push(task);
        await this.writeTasks();
    }

    async updateTask(id, description) {
        const task = this.taskItems.find(task => task.id === id);

        // Não está sendo printado o erro aqui. Avaliar 14/02 07h44
        if (!task) {
            console.error("Esse ID não representa nenhuma tarefa.");
            return;
        }

        task.description = description
        task.updatedAt = new Date();

        await this.writeTasks();
    }

    async deleteTask(id) {
        const task = this.taskItems.find(task => task.id === id);

        // Não está sendo printado o erro aqui. Avaliar 14/02 07h46
        if (!task) {
            console.log("Esse ID não representa nenhuma tarefa.");
            return;
        }

        this.taskItems = this.taskItems.filter(task => task.id !== id);

        await this.writeTasks();
    }
    
    listTasks(status) {
        if (!status){
            return this.taskItems; 
        }
        return this.taskItems.filter(task => task.status === status);
    }

    async markTask(newStatus, id) {
        const task = this.taskItems.find(task => task.id === id);

        if (!task) {
            console.log("Esse ID não representa nenhuma tarefa.");
            return;
        }

        switch (newStatus) {
            case "mark-in-progress":
                task.status = STATUS.IN_PROGRESS;
                await this.writeTasks();
                break;

            case "mark-done":
                task.status = STATUS.DONE;
                await this.writeTasks();
                break;

            default:
                console.log("MARK-* deve ser utilizado: MARK-DONE ou MARK-IN-PROGRESS")
                break;
        }


    }

    getNextId() {
        if (this.taskItems.length === 0) {
            return 1;
        }

        const maxID = Math.max(...this.taskItems.map(task => task.id));

        return maxID + 1;
    }

    async loadTasks() {
        try {
            console.log("Sucesso ao ler arquivo.");
            const data = await fs.readFile('storage/tasks.json', 'utf-8');
            this.taskItems = JSON.parse(data); // Última adição no arquivo. Enviamos isso ao this.taskItems
        } catch (error) {
            console.error("Erro ao ler arquivo");
        }
    }

    async writeTasks() {
        try {
            await fs.writeFile('storage/tasks.json', JSON.stringify(this.taskItems, null, 2), 'utf-8');
            console.log("Sucesso ao criar arquivo.");
        } catch (error) {
            console.error("Falha ao criar arquivo.");
        }
    }
}
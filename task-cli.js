/*
    Autor: Pedro Ramalho
    Ano: 2026
    Projeto: Task-tracker-CLI from Roadmap.sh
*/
import { checkInputedID, convertedID } from "./validators/checkInputedID.js";
import { TaskRepository } from "./domain/TaskRepository.js";
import { STATUS } from "./domain/TaskStatus.js"

const repository = new TaskRepository();


async function main() {

    let command = process.argv[2];
    let args = process.argv.slice(3);

    await repository.loadTasks();
    switch (command) {
        case "add":
            if (args.length !== 1) {
                console.log("Quantidade de argumentos incorreta. ADD espera a descrição da tarefa dentro de aspas duplas.");
            } else {
                repository.addTask(args[0]);
            }
            break;
        case "update": 
            if (args.length !== 2) {
                console.log("Quantidade de argumentos incorreta. UPDATE espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser alterada e a nova descrição dentro de aspas duplas.");
            } else {
                if (!checkInputedID(args)) {
                    console.log("UPDATE espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser alterada");
                } else {
                    repository.updateTask(convertedID(args[0]), args[1]);
                    console.log("Tarefa atualizada com sucesso.");
                }
            }
            break;
        case "delete": 
            if (args.length !== 1) {
                console.log("Quantidade de argumentos incorreta. DELETE espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser deletada.");
            } else {
                if (!checkInputedID(args)) {
                    console.log("DELETE espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser deletada.");
                } else {
                    repository.deleteTask(convertedID(args[0]));
                }
            }
            break;
        case "mark-in-progress":
            if (args.length !== 1) {
                console.log("Quantidade de argumentos incorreta. MARK-IN-PROGRESS espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser marcada com status IN-PROGRESS.");
            } else {
                if (!checkInputedID(args)) {
                    console.log("MARK-IN-PROGRESS espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser atualizada.");
                } else {
                    repository.markTask(command, convertedID(args[0]));
                }
            }
            break;
        case "mark-done":
            if (args.length !== 1) {
                console.log("Quantidade de argumentos incorreta. MARK-IN-PROGRESS espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser marcada com status DONE.");
            } else {
                if (!checkInputedID(args)) {
                    console.log("MARK-DONE espera o ID - (Número inteiro positivo, e.g 1) - da tarefa a ser atualizada.");
                } else {
                    repository.markTask(command, convertedID(args[0]));
                }
            }
            break;
        case "list":

            const allowedStatuses = [STATUS.DONE, STATUS.TODO, STATUS.IN_PROGRESS];
            if (args.length > 1) {
                console.log("LIST espera nenhum ou 'done, todo ou in-progress' como argumento.");
                break;
            } 

            const status = args[0]; 

            if (status && !allowedStatuses.includes(status)) {
                console.log("LIST espera como argumento: 'done, todo ou in-progress'.");
                break;
            }

            const tasks = repository.listTasks(status);

            if (tasks.length === 0) {
                console.log("Nenhuma tarefa encontrada.");
                break;
            }

            console.log(tasks);
            break;

        default:
            console.log("Comando inválido. Use: add | update | delete | mark-* | list");
            break;
    }
}

main();










import { STATUS } from "./TaskStatus.js";

export class Task {
    constructor({id, description,status, createdAt, updatedAt}) {
        this.id = id;
        this.description = description;
        if (!Object.values(STATUS).includes(status)) {
            throw new Error(`Status inválido. STATUS deve ser ${Object.values(STATUS).join(", ")}`);
        }
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
type TodoActionType = "create" | "update" | "delete"

export interface TodoAction {
	type: TodoActionType,
	payload: ITodo | number // todo for create, partial todo for update, number for delete
}

export interface ITodo {
	id: number,
	task: string,
	urgency: number,
	complete: boolean
}
type TodoActionType = "create" | "update" | "delete"

export interface TodoAction {
	type: TodoActionType,
	payload: ITodo
}

export interface ITodo {
	task: string,
	urgency: number,
	complete: boolean
}
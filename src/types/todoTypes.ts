enum TodoActionType {
	create = "create",
	update = "update",
	delete = "delete"
}

export interface TodoAction {
	type: TodoActionType
	// might want to add payload here later
}

export interface Todo {
	task: string,
	urgency: number,
	complete: boolean
}
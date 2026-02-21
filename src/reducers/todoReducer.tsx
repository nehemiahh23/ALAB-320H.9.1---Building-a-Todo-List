import type { Reducer } from "react";
import type { ITodo, TodoAction } from "../types/todoTypes.js";

const todoReducer: Reducer<ITodo[], TodoAction> = (state, action): ITodo[] => {
	switch(action.type) {
		case "create": {
			const input = action.payload as ITodo
			return [input, ...state]
		}
		case "update": {
			const input = action.payload as Partial<ITodo>
			const index = state.findIndex(todo => todo.id === input.id)
			return state.toSpliced(index, 1, input)
		}
		case "delete": {
			return state.filter(todo => todo.id !== action.payload)
		}
		default: {
			return state
		}
	}
}

export default todoReducer
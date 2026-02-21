import type { Reducer } from "react";
import type { ITodo, TodoAction } from "../types/todoTypes.js";

const todoReducer: Reducer<ITodo[], TodoAction> = (state, action): ITodo[] => {
	switch(action.type) {
		case "create": {
			const input = action.payload as ITodo
			return [input, ...state]
		}
		case "update": {
			console.log("updat")
			return state
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
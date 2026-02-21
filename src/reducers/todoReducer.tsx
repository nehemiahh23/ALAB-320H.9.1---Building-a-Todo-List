import type { Reducer } from "react";
import type { Todo, TodoAction } from "../types/todoTypes.js";

const todoReducer: Reducer<Todo, TodoAction> = (state, action): Todo => {
	switch(action.type) {
		case "create": {
			return state
		}
		case "update": {
			return state
		}
		case "delete": {
			return state
		}
		default: {
			return state
		}
	}
}

export default todoReducer
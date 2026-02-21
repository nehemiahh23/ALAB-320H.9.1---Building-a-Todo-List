import type { Reducer } from "react";
import type { ITodo, TodoAction } from "../types/todoTypes.js";

const todoReducer: Reducer<ITodo[], TodoAction> = (state, action): ITodo[] => {
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
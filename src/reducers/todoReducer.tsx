import type { Reducer } from "react";
import type { ITodo, TodoAction } from "../types/todoTypes.js";

const todoReducer: Reducer<ITodo[], TodoAction> = (state, action): ITodo[] => {
	switch(action.type) {
		case "create": {
			console.log("creat")
			return [action.payload, ...state]
		}
		case "update": {
			console.log("updat")
			return state
		}
		case "delete": {
			console.log("delet")
			return state
		}
		default: {
			return state
		}
	}
}

export default todoReducer
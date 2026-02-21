import { useReducer } from "react"
import type { Reducer } from "react";
import todoReducer from "../reducers/todoReducer.js"
import Input from "./Input.js"
import Item from "./Item.js"

function List() {
	const [todoList, listDispatch] = useReducer(todoReducer, [{task: "expeletive around", urgency: 10, complete: false}, {task: "chill", urgency: 1, complete: true}])

  return (
	<div id="parent">
		<Input />
		<ul>
			{ todoList.map((t) => <Item {...t}/>) }	
		</ul>
	</div>
  )
}
export default List
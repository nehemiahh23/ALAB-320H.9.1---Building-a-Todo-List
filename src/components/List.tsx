import { useReducer, useRef } from "react"
import todoReducer from "../reducers/todoReducer.js"
import Input from "./Input.js"
import Item from "./Item.js"

function List() {
	const id = useRef(2)
	const [todoList, listDispatch] = useReducer(todoReducer, [{id: 0, task: "Learn Typescript", urgency: 10, complete: false}, {id: 1, task: "Learn normal javascript", urgency: 1, complete: true}])

  return (
	<div id="parent">
		<Input dispatch={listDispatch} id={id} />
		<ul>
			{ todoList.map((todo) => <Item key={todo.id} dispatch={listDispatch} {...todo}/>) }	
		</ul>
	</div>
  )
}
export default List
import { Dispatch, FunctionComponent } from "react"
import type { ITodo, TodoAction } from "../types/todoTypes.js"

const Item: FunctionComponent<Props> = ({ dispatch, id, task, urgency, complete }) => {
	function handleChange(e) {
		console.log(e.target.checked)
	}
	
	function handleDelete(e) {
		complete ? dispatch({type: "delete", payload: id}) : alert("Task must be completed before deletion.")
	}

	return (
	<li style={{listStyle: "none", backgroundColor: "rgb(200, 0, 0, 0.5)"}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		<h3>{ task }</h3>
		<label htmlFor="complete"> Completed?
			<input type="checkbox" name="complete" onChange={handleChange} checked={complete} />
		</label>
		<br />
		<button>Edit</button>
		<button onClick={handleDelete}>Delete</button>
	</li>
  )
}

interface Props extends ITodo {
	dispatch: Dispatch<TodoAction>
}

export default Item
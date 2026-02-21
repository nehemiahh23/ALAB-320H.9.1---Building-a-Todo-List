import { Dispatch, FunctionComponent } from "react"
import type { ITodo, TodoAction } from "../types/todoTypes.js"

const Item: FunctionComponent<Props> = ({ dispatch, id, task, urgency, complete }) => {
	function handleToggle(_e) {
		dispatch({type: "update", payload: {
			id: id,
			task: task,
			urgency: urgency,
			complete: !complete
		}})
	}
	
	function handleDelete(_e) {
		complete ? dispatch({type: "delete", payload: id}) : alert("Task must be completed before deletion.")
	}

	return (
	<li style={{listStyle: "none", backgroundColor: "rgb(200, 0, 0, 0.5)"}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		<h3>{ task }</h3>
		<label htmlFor="complete"> Completed?
			<input type="checkbox" name="complete" onChange={handleToggle} checked={complete} />
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
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
		dispatch({type: "delete", payload: id})
	}

	return (
	<li style={{listStyle: "none", backgroundColor: "rgb(200, 0, 0, 0.5)"}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		<h3>{ task }</h3>
		<label htmlFor="complete"> Completed?
			<input type="checkbox" name="complete" onChange={handleToggle} checked={complete} />
		</label>
		<br />
		<button>Edit</button>
		{ complete && <button onClick={handleDelete}>Delete</button> }
	</li>
  )
}

interface Props extends ITodo {
	dispatch: Dispatch<TodoAction>
}

export default Item
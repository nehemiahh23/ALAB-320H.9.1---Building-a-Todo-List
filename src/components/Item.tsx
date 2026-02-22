import { Dispatch, FunctionComponent, useState } from "react"
import type { ITodo, TodoAction } from "../types/todoTypes.js"

const Item: FunctionComponent<Props> = ({ dispatch, id, task, urgency, complete }) => {
	const [editMode, setEditMode] = useState(false)
	const r = urgency * 20
	const g = 220 - (urgency * 20)
	// 1 * 200
	// 2 * 90
	// 3 * 53.33...
	// 4 * 35
	// 5 * 24
	// 6 * 16.66...
	// 7 * 11.43
	// 8 * 7.5
	// 9 * 4.44...
	// 10 * 2

	function handleMode(_e) {
		setEditMode(!editMode)
	}

	function handleChange(e) {
		dispatch({type: "update", payload: {
			id: id,
			task: task,
			urgency: urgency,
			complete: complete,
			[e.target.name]: e.target.value
		}})
	}

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
	<li style={{listStyle: "none", backgroundColor: `rgb(${r}, ${g}, 0, 0.5)`}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		{ editMode ? <>
			<input type="text" onChange={handleChange} name="task" value={task} style={{textAlign: "center"}} /><br />
			<input type="range" onChange={handleChange} name="urgency" min="1" max="10" value={urgency} /><br />
		</> : <h3>{ task }</h3> }
		<label htmlFor="complete"> Completed?
			<input type="checkbox" name="complete" onChange={handleToggle} checked={complete} />
		</label>
		<br />
		{ editMode ? <button onClick={handleMode}>Save</button> : 
			<>
				<button onClick={handleMode}>Edit</button> 
				{ complete && <button onClick={handleDelete}>Delete</button> }
			</>
		}
	</li>
  )
}

interface Props extends ITodo {
	dispatch: Dispatch<TodoAction>
}

export default Item
import { Dispatch, FunctionComponent, useState } from "react"
import type { TodoAction } from "../types/todoTypes.js"

const Input: FunctionComponent<Props> = ({ dispatch }) => { // everyone say "thank you TypeScript"
	const [fields, setFields] = useState({
		task: "",
		urgency: 5,
		complete: false
	})

	function handleChange(e) {
		setFields({ ...fields, [e.target.name]: e.target.value})
	}
	
	function handleSubmit(e) {
		e.preventDefault()
		
	}
	
	return (
	<fieldset>
		<legend>Add a Todo Item</legend>
		<form onSubmit={handleSubmit}>
			<label htmlFor="task"> Task:
				<input type="text" name="task" value={fields.task} onChange={handleChange} placeholder="Input a Task..." />
			</label>
			<label htmlFor="urgency"> Urgency:
				<input type="range" name="urgency" min="1" max="10" value={fields.urgency} onChange={handleChange} />
			</label>
			<input type="submit" value="Add" />
		</form>
	</fieldset>
  )
}

interface Props {
	dispatch: Dispatch<TodoAction>
}

export default Input
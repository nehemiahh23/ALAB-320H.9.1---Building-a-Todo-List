import type { ITodo } from "../types/todoTypes.js"

function Item({ task, urgency, complete }: ITodo) {
  return (
	
	<li style={{listStyle: "none", backgroundColor: "rgb(200, 0, 0, 0.5)"}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		<h3>{ task }</h3>
		<label htmlFor="complete"> Completed?
			<input type="checkbox" name="complete" />
		</label>
		<br />
		<button>Edit</button>
		<button>Delete</button>
	</li>
  )
}
export default Item
import { useReducer } from "react"
import Input from "./Input.js"
import Item from "./Item.js"

function List() {
  return (
	<div id="parent">
		<Input />
		<ul>
			<Item /> {/* map from state */}		
		</ul>
	</div>
  )
}
export default List
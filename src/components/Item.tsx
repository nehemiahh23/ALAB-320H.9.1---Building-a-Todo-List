function Item() {
  return (
	
	<li style={{listStyle: "none", backgroundColor: "rgb(200, 0, 0, 0.5)"}}> {/* bgc corresponds w/ urgency, all inputs should be rendered conditionally */}
		<h3>Todo text here</h3>
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
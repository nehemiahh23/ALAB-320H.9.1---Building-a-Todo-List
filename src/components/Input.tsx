function Input() {
  return (
	<fieldset>
		<legend>Add a Todo Item</legend>
		<form>
			<label htmlFor="task"> Task:
				<input type="text" name="task" placeholder="Input a Task..." />
			</label>
			<label htmlFor="urge"> Urgency:
				<input type="range" name="urge" min="0" max="10" />
			</label>
			<input type="submit" value="Add" />
		</form>
	</fieldset>
  )
}
export default Input
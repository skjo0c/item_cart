var NewItem = createReactClass({

	addItem(event){
		event.preventDefault();

		let name = this.refs.name.value;
		let description = this.refs.description.value;

		console.log(name + '	' + description);
	},

	render:function(){
		return(
			<div>
				<form>
					<input  ref= 'name' placeholder = 'Item name...' />
					<input  ref= 'description' placeholder = 'Description of the item here... ' />
					<button> Add Item </button>
				</form>

			</div>
		)
	}
});
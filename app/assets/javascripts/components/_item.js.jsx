var Item = React.createClass({

	getInitialState(){

		var initialName = this.props.item.name;
		var initialDescription = this.props.item.description;
		return{itemName: initialName, itemDescription: initialDescription, editable: false}
	},

	handleEdit(){
		if(this.state.editable){
			var name = this.state.itemName
			var description = this.state.itemDescription
			var id = this.props.item.id
			var item = {id: id, name: name, description: description}

			this.props.handleUpdate(item)
		}
		this.setState({editable: !this.state.editable})
	},

    handleNameChange(event) {
        this.setState({itemName: event.target.value});
    },

    handleDescriptionChange(event) {
        this.setState({itemDescription: event.target.value});
    },

	render(){
		var name = this.state.editable? <input type="text" value={this.state.itemName} onChange={this.handleNameChange} defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable? <input type="text" value={this.state.itemDescription} onChange={this.handleNameChange} defaultValue={this.props.item.description} /> : <p> {this.props.item.description} </p>;
		return(
			<div>
				{name}
				{description}
				<button onClick={this.props.handleDelete}> Delete </button>
				<button onClick={this.handleEdit}> {this.state.editable? 'Submit':'Edit'} </button>
			</div>
			)
	}
});

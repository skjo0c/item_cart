var Item = React.createClass({

	getInitialState(){
		return{editable: false}
		return { itemName: '', itemDescription: '' }
	},

	handleUpdate(){
		this.setState({editable: !this.state.editable})
	},

	handleEdit(){
		if(this.state.editable){
			var name = this.state.name
			var description = this.state.description
			var id = this.props.items.id
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
		var description = this.state.editable? <input type="text" value={this.state.itemName} onChange={this.handleNameChange} defaultValue={this.props.item.description} /> : <p> {this.props.item.description} </p>;
		return(
			<div>
				<h3>{name}</h3>
				<p>{description}</p>
				<button onClick={this.props.handleDelete.bind(this, item.id)}> Delete </button>
				<button onClick={this.handleUpdate}> {this.state.editable? 'Submit':'Edit'} </button>
			</div>
			)
	}
});

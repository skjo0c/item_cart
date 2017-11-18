var Item = React.createClass({

	getInitialState(){
		return{editable: false}
	},

	handleUpdate(){
		this.setState({editable: !this.state.editable})
	},

	render(){
		var name = this.state.editable? <input type="text" ref= 'name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable? <input type="text" ref='description' defaultValue={this.props.item.description} /> : <p> {this.props.item.description} </p>;
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

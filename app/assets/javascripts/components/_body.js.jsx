var Body = React.createClass({
	getInitialState() {
		return{items:[]}
	},

	componentDidMount(){
		$.getJSON('/api/v1/items.json', (response) => {this.setState({items: response})});
	},

	handleSubmit(item){
		var newState = this.state.items.concat(item);
		this.setState({items: newState});
	},

	handleDelete(id){
		$.ajax({
			url: `api/v1/items/${id}`,
			type: 'DELETE',
			success:()=>{
				this.removeItemClient(id);
			}
		});
	},

	handleUpdate(){
		$.ajax({
			url: `api/v1/items/${id}`,
			type: 'PUT',
			data: {item: item},
			success: () => {
				console.log('You did it')
				this.updateItems(item);
			}
		})
	},

	removeItemClient(id){
		var newItems = this.state.items.filter((item)=>{
			return item.id != id;
		});
		this.setState({items: newItems})
	},

	render(){
		return(
			<div>
				<NewItem handleSubmit = {this.handleSubmit}/>
				<AllItems items = {this.state.items} handleDelete = {this.handleDelete} onUpdate={this.handleUpdate}/>
			</div>
		)
	}
});
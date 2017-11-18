var NewItem = React.createClass({

    getInitialState() { 
        return { itemName: '', itemDescription: '' }
    },

    addItem(event){
    	event.preventDefault();

        let name = this.state.itemName;
        let description = this.state.itemDescription;

        $.ajax({
        	url: '/api/v1/items',
        	type: 'POST',
        	data: {item: {name: name, description: description}},
        	success: (item) => {
        		this.props.handleSubmit(item);
        	}
        })

        console.log(name + '    ' + description);
        
    },

    handleNameChange(event) {
        this.setState({itemName: event.target.value});
    },

    handleDescriptionChange(event) {
        this.setState({itemDescription: event.target.value});
    },

    render:function(){
        return(
            <form onSubmit={this.addItem}>
                <input type="text" value={this.state.itemName} onChange={this.handleNameChange} placeholder = 'Name of the item here... ' />
                <input type="text" value={this.state.itemDescription} onChange={this.handleDescriptionChange} placeholder = 'Description of the item here... ' />
                <button> Add Item </button>
            </form>
        )
    }
});
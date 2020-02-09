import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './search.scss';


class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			city: ''
		}
	}

	onChange = (event) => {
		this.setState({
			city: event.target.value
		});
	}

	onSearch = () => {
		const {city} = this.state;
		if(city.trim().length>0) {
			this.props.onSearch(city.trim());
		}
	}

	render() {
		return (
			<div className="search-widget">
				<InputGroup size="lg">
					<FormControl
					  placeholder={this.props.placeholder}
					  aria-describedby="basic-addon2"
					  value = {this.state.city}
					  onChange = {this.onChange.bind(this)}
					/>
					<InputGroup.Append>
					  <Button variant="outline-secondary" onClick={this.onSearch.bind(this)}>
					  	<FaSearch /> &nbsp; {this.props.btnLabel}
					  </Button>
					</InputGroup.Append>
				</InputGroup>
			</div>
		);
	}
}

export default Search;

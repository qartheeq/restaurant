import React from 'react';
import Search from './../../components/search/Search';
import './home.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions as searchRestaurantsActions} from './../../ducks/searchRestaurants/searchRestaurantsReducer';
import Restraurants from './../../components/restraurants/Restraurants';
import Loader from './../../components/common/loader/Loader';
import Message from './../../components/common/message/Message';


class Home extends React.Component {

	onSearchRestaurants = (cityToSearch) => {
		this.props.actions.loadRestaurants(cityToSearch);
	}

	showLoader = () => {
		return (<Loader message="please wait while we are searching the best restraurants for you..."/>);
	}

	showNoRestraurantsMessage = () => {
		return (
			<Message 
				type="warning" 
				heading="No Restraurants Found"
				message="Currently we don't have any Restraurants serving in the city you entered. Please change the city to look for available Restraurants. Sorry for the inconvenience."
				footerMessage="We are expanding our services, please stay tuned for updates."
			/>
		);
	}

	getRestraurants = () => {
		const { restaurants, isLoading } = this.props;
		if(isLoading) {
			return this.showLoader();
		} else if(restaurants) {
			if(restaurants.length===0) {
				return this.showNoRestraurantsMessage();
			} else {
				return (<Restraurants restaurants={this.props.restaurants} />);
			}
		}
	}

	getRestraurantSearchWidget() {
		return (
			<Search 
				placeholder="Enter city to search for restaurants or cuisines..." 
				onSearch={this.onSearchRestaurants.bind(this)}
				btnLabel="FIND RESTAURANTS"
			/>
		);
	}

	render() {
		return (
			<div className="container-fluid home">
				<div className="row">
					<div className="col-12 offset-md-1 col-md-10">
						{this.getRestraurantSearchWidget()}
						{this.getRestraurants()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    isLoading: state.searchRestaurantsReducer.isLoading,
	restaurants: state.searchRestaurantsReducer.restaurants,
	isFailed: state.searchRestaurantsReducer.isFailed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...searchRestaurantsActions}, dispatch)
  };
}

Home.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  restaurants: PropTypes.array,
  isFailed: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

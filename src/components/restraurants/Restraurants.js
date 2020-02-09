import React from 'react';
import Restraurant from './../restraurants/Restraurant';
import './restraurant.scss';

const Restraurants = (props) => 
	<div className="row restraurants">
		{
			props.restaurants.map((restaurant, index) => <Restraurant key={index} {...restaurant}/>)
		}
	</div>

export default Restraurants;


import React from 'react';
import { Card } from 'react-bootstrap';
import { formatPhoneNumber } from './../../utils/Formattor';
import { IoIosBusiness } from "react-icons/io";
import { MdPhone } from "react-icons/md";


const Restraurant = (props) =>
	<div className="col-12 col-sm-6 col-md-3 restraurant">
		<Card >
		  <Card.Img variant="top" src={props.image_url} />
		  <Card.Body>
		    <Card.Title>{props.name}</Card.Title>
		    <Card.Text className="details">
		    	<span className="adress">
		    		<span><IoIosBusiness /></span>
		    		<span>
		    			<span className="title">Address</span>
		    			<span>{props.address} {props.city}</span> <br/>
		      			<span>{props.state} {props.postal_code}</span>
		    		</span>
		    	</span>
		    	<span className="phone-number">
		    		<span><MdPhone /></span>
		    		<span>
		    			<span className="title">Phone Number</span>
		    			<span>{formatPhoneNumber(props.phone)}</span>
		    		</span>
		    	</span>
		    </Card.Text>
		    <div className="row">
		    	<div className="col-4">
		    		<span className="price">${props.price}</span>
		    	</div>
		    	<div className="col-8">
		    		<a href={props.reserve_url} target="_blank" className="more-details" rel="noopener noreferrer">More Details</a>
		    	</div>
		    </div>
		  </Card.Body>
		</Card>
	</div> 

export default Restraurant;

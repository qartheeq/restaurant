import React from 'react';
import { Spinner } from 'react-bootstrap';
import './loader.scss';

const Loader = (props) => (
	<div className="loader">
		<Spinner animation="border" variant="primary" size="lg"/>
		<div>{props.message}</div>
	</div>
);


export default Loader;

import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = (props) => (
	<Alert variant={props.type}>
	  <Alert.Heading>{props.heading}</Alert.Heading>
	  <p>
	    {props.message}
	  </p>
	  <hr />
	  <p className="mb-0">
	    {props.footerMessage}
	  </p>
	</Alert>
);


export default Message;

import React, { Component } from 'react';

const Button = (props) => {
	return(
		<button style={{width:'75px',height:'75px'}} className={props.className} value={props.value}onClick={props.input}>{props.buttonValue?props.buttonValue:'button'}</button>
	)
}

export default Button
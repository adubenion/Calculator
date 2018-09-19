import React, { Component } from 'react';

const NumberBar = (props) => {
	return(
		<div classname={props.className}>
			<input className="input is-large" type='text' value={props.numberBar} readOnly />
		</div>
	)
}

export default NumberBar
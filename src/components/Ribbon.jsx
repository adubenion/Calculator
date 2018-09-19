import React, { Component } from 'react';
import Button from './Button.jsx'

const Ribbon = (props) => {
	return(
		<div>
			{props.value.length > 0?<p className="subtitle">Ribbon</p>:false}
			{props.value.map(i => <p className="subtitle" key={i}>{i}</p>)}
			{props.value.length > 0?<Button value='clearRibbon' buttonValue="Clear Ribbon" onClick={props.input}/>:false}
		</div>
	)
}

export default Ribbon
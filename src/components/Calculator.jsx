import React, { Component } from 'react';
import Button from './Button.jsx';
import NumberBar from './NumberBar.jsx';
import Ribbon from './Ribbon.jsx';

const Calculator = (props) => {
	return(
			<div  style={props.calcStyle}>
					<h1 className="title is-3">Calculator</h1>
					<div>
						<NumberBar classname="field" numberBar={props.numberBar.join(' ')}/>
					</div>
						<div>
							{props.buttons.reverse().filter(x => x >= 7).map(x => <Button className="button" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.ops.filter(x => x == '+').map(x => <Button className="button is-info" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
						</div>
						<div>
							{props.buttons.reverse().filter(x => x >= 4 && x < 7).map(x => <Button className="button" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.ops.filter(x => x == '-').map(x => <Button className="button is-info" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
						</div>
						<div>
							{props.buttons.reverse().filter(x => x >= 1 && x < 4).map(x => <Button className="button" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.ops.filter(x => x == '*').map(x => <Button className="button is-info" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
						</div>
						<div>
							{props.commands.filter(x => x == 'C').map(x => <Button className="button is-danger" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.buttons.reverse().filter(x => x == 0).map(x => <Button className="button" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.commands.filter(x => x == '=').map(x => <Button className="button is-success" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
							{props.ops.filter(x => x == '/').map(x => <Button className="button is-info" input={props.handleInput} value={x} key={x} buttonValue={`${x}`}/>)}
						</div>
				<Ribbon value={props.ribbon} input={props.handleInput}/>
			</div>
	)
}

export default Calculator
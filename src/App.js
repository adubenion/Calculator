import React, { Component } from 'react';
import Calculator from './components/Calculator.jsx'
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons:[],
      commands:['=','C','clearRibbon'],
      ops: ['+','-','*','/'],
      numberBar: [],
      ribbon: []
    }
  }

  handleMath(ops) {

  }

  handleInput(event) {
    let numberBar = this.state.numberBar;
    let value = event.target.value
    if (this.state.commands.indexOf(value) === -1) {
      numberBar.push(value)
      this.setState({input:numberBar})  
    } else {
      switch(value) {
        case '=':
          // let enter = this.state.numberBar.join('').toString().replace(/^0+/, '').split(' ');
          let num = this.state.numberBar.join('').toString().replace(/(^0+)|([^\w]0+|\-0+)/g, '').split(/[^\d]/);
          console.log(num)
          let op = this.state.numberBar.filter(x => new RegExp(/\+|\-|\/|\*/).test(x))
          console.log(op)
          let math = []
          let res
          for (let x=0; x <= num.length - 1; x ++) {
            if (op[x] !== undefined) {
              math.push(num[x])
              math.push(op[x])
            } else{
              math.push(num[x])
            }
            console.log(math)
          }
          //Used eval being fully aware of its background/status in JS community. Did not host on personal site
          res = eval(`${math.join('')}`)
          console.log(res)
          let ribbon = this.state.ribbon;
          let numberBar = this.state.numberBar;
          ribbon.push(`${math.join(' ')} =  ${res}`)
          this.setState({ribbon: ribbon}, () => {
            this.setState({numberBar: []})
          })
        break;
        case 'C':
          this.setState({numberBar: []})
        break;
        case 'clearRibbon':
          this.setState({ribbon: []})
          break;
        default:
          console.log('Unknown value, ',value)
      }
    }
  }
  componentDidMount() {
    let buttons = this.state.buttons;
    for (let x=9; x >= 0; x--) {
    buttons.push(x)
    }
    this.setState({buttons: buttons})
  }

  render() {
    return (
      <div className="container is-fluid has-text-centered">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Calculator 
          calcStyle={{maxWidth:'400px', margin:'0 auto', border:'1px solid black', borderTop:'none', borderRadius:'25px'}}
          ops={this.state.ops}
          commands={this.state.commands} 
          buttons={this.state.buttons} 
          handleInput={this.handleInput.bind(this)} 
          numberBar={this.state.numberBar} 
          ribbon={this.state.ribbon}/>
        </div>
      </div>
    );
  }
}

export default App;

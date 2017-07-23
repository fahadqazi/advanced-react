import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component{
  state = {
    answer: 42
  };

  asyncFunction = () => {
    return Promise.resolve(38);
  };

  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunction()
    });
  }

  render(){
    return(
      <h2>Hello React App! - {this.state.answer}</h2>
    );
  }
}

ReactDOM.render( < App / > , document.getElementById('root'));
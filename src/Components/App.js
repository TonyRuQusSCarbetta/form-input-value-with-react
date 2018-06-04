import React, { Component } from 'react';
import '../Styles/grid/grid12.css'
import '../Styles/App.css';
// import '../Styles/hover.css';
// import { Container, Row, Col } from 'reactstrap';
import Content from '../Components/Content.js'
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',

    }
    this.change = this.change.bind(this);
  }
  change(event) {
    this.setState({
      // https://news.ycombinator.com/item?id=13154076
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state);
    })
      console.log(event.target.value);
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Content change={this.change}/>
          </div>
        </div>
      </div>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;

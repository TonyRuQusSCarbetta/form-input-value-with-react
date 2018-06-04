import React, {Component} from 'react';
import '../Styles/App.css';
// import { Container, Row, Col } from 'reactstrap';
// import '../Styles/Content.css';
// import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony'
    }
    // this.createAnyNewMethod = this.createAnyNewMethod.bind(this)
  }
  // -----------------------------------------------------------------------------
  render() {
    return (<div>

      <h4>Filter</h4>

      <label htmlFor="city">City</label>
      <select name="city" className="filters city" onChange={this.props.change}>
        <option value="All">All</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Miami">Miami</option>
        <option value="New York City">New York City</option>
      </select>

      <label htmlFor="extras">
        <input name="swimming_pool" value="swimming pool" type="checkbox" onChange={this.props.change}/>
        <span>Swimming Pool</span>
      </label>

      <label htmlFor="extras">
        <input name="garage" value="garage" type="checkbox" onChange={this.props.change}/>
        <span>Garage</span>
      </label>
      
    </div>)
  }
}
// -----------------------------------------------------------------------------
export default App;

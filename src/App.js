import React from 'react';

import assets from './components/assets';
import Cards from './components/Cards';
class App extends React.Component {
  state = {
    assets,
    card_size: 'Medium'
  }

  handleChange = (e) => {
    this.setState({
      card_size: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <label for="inputState">Card Size</label>
          <select class="form-control" onChange={this.handleChange}>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
        </div>
        <Cards assets={this.state.assets} card_size={this.state.card_size} />
      </div>
    );
  }
}

export default App;

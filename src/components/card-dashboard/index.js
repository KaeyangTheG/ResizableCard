import React from 'react';
import data from './data';
import Cards from './Cards';

class CardDashboard extends React.Component {
  state = {
    data,
    cardSize: 'md',
  };

  handleChange = e => {
    this.setState({
      cardSize: e.target.value,
    });
  };

  render() {
    const { cardSize, data } = this.state;
    return (
      <>
        <form style={{ width: '80%', margin: 'auto' }}>
          <label>Card Size</label>
          <select
            value={cardSize}
            className="form-control"
            onChange={this.handleChange}
          >
            <option value="lg">Large</option>
            <option value="md">Medium</option>
            <option value="sm">Small</option>
          </select>
        </form>
        <Cards cards={data} cardSize={cardSize} />
      </>
    );
  }
}

export default CardDashboard;

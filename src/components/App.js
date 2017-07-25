import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };

    this.updateFilterCallback = this.updateFilterCallback.bind(this);
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));

    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  updateFilterCallback (event) {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render(){
  	return <FruitBasket 
  	fruit={this.state.fruit} 
  	filters={this.state.filters} 
  	currentFIlter={this.state.currentFilter} 
  	handleChange={this.updateFilterCallback}/>;
  }
 }

export default App;

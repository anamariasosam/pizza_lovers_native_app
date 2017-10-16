import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import axios from 'axios';
import PizzaDetail from './../components/PizzaDetail';

axios.defaults.baseURL = 'https://rallycoding.herokuapp.com';

class PizzasList extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
    };
  }

  componentWillMount() {
    axios
    .get('/api/music_albums')
    .then(response => this.setState({ pizzas: response.data }));
  }

  renderPizzas() {
    return this.state.pizzas.map(pizza =>
      <PizzaDetail key={pizza.title} pizza={pizza} />);
  }

  render() {
    return (
      <ScrollView>
        { this.renderPizzas() }
      </ScrollView>
    );
  }
}

export default PizzasList;

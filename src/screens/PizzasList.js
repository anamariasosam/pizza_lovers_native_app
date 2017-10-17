import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import PizzaDetail from './../components/PizzaDetail';

axios.defaults.baseURL = 'https://railspizzalovers.herokuapp.com/api/v1/';

class PizzasList extends Component {
  static navigationOptions = {
    title: 'Pizza Lovers 🍕',
  };

  constructor() {
    super();
    this.state = {
      pizzas: [],
    };

    this.populatePizzas = this.populatePizzas.bind(this);
    this.upVote = this.upVote.bind(this);
  }

  componentWillMount() {
    this.populatePizzas()
  }

  populatePizzas() {
    return axios
      .get('/pizzas')
      .then(response => this.setState({ pizzas: response.data }));
  }

  upVote(id) {
    axios
      .post(`/pizzas/${id}/upvote`)
      .then(this.populatePizzas)
      .catch(console.log)
  }

  renderPizzas() {
    return this.state.pizzas.map(pizza =>
      <PizzaDetail key={pizza.id} pizza={pizza} upVote={this.upVote} />);
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

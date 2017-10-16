import React from 'react';
import { StackNavigator } from 'react-navigation';

import PizzasList from './src/screens/PizzasList';

const Pizzas = StackNavigator({
  PizzasList: { screen: PizzasList },
});

const App = () => (
  <Pizzas />
);

export default App;

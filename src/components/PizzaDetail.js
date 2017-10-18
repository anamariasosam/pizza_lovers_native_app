import React, { Component } from 'react';
import {
  Button,
  Card,
  Text,
} from 'react-native-elements';

export default class PizzaDetail extends Component {
  constructor() {
    super();
    this.state = {
      button_disabled: false,
    };
    this.upVote = this.upVote.bind(this)
  }

  upVote() {
    this.setState({ button_disabled: true });
    this.props.upVote(this.props.pizza.id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.pizza.votes != nextProps.pizza.votes) {
      this.setState({ button_disabled: false });
    }
  }

  render() {
    const {
      image_url,
      name,
      ingredients,
      votes,
      id
    } = this.props.pizza;

    return (
      <Card
        title={name}
        image={{uri: image_url}}
        imageStyle={{flex:1, alignSelf: 'stretch'}}
      >
        <Text style={{marginBottom: 10}}>
          {ingredients}
        </Text>
        <Button
          raised
          icon={{name: 'local-pizza'}}
          backgroundColor='#f04e43'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title={`${votes}`}
          fontSize={20}
          onPress={this.upVote}
          disabled={this.state.button_disabled}
        />
      </Card>
    );
  }
}

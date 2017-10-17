import React from 'react';
import {
  Button,
  Card,
  Text,
} from 'react-native-elements';

const PizzaDetail = ({ pizza, upVote }) => {
  const {
    image_url,
    name,
    ingredients,
    votes,
    id
  } = pizza;

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
        onPress={() => upVote(id)}
      />
    </Card>
  );
};

export default PizzaDetail;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';

import Card from './../components/Card';
import CardSection from './../components/CardSection';

const PizzaDetail = ({ pizza }) => {
  const {
    image
  } = pizza;

  const {
    songImage,
  } = styles;

  return (
    <Card>
      <CardSection>
        <Image source={{ uri: image }} style={songImage} />
      </CardSection>

      <CardSection>
        <Button
          onPress={() => console.log('HIIII')}
          title="More info"
          accessibilityLabel="Learn more about this artist"
        />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  songImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default PizzaDetail;

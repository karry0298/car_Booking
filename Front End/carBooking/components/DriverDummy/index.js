import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DriverDummy extends Component {  //rename ur calss same as ur folder path
  static navigationOptions = {
    title: 'Driver Page',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

import React, { Component } from "react";
import { ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={2000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>1 Nucamp Way </Text>
            <Text>Seattle, Wa 98001</Text>
            <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
            <Text>Phone: 1-206-555-1234 </Text>
            <Text>Email: campsites@nucamp.com </Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
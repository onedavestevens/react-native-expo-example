import React from '../Library/Caches/typescript/2.9/node_modules/@types/react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
        todos: [
          {
            task: 'Learn React Native',
          }
        ]
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up the App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

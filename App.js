import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './src/components/Card';
import Stacknavigation from './src/navigation/Stacknavigation';
import Profilescreen from './src/screens/Profilescreen';
import AddSale from './src/screens/AddSale';

const App = () => {
  return (
    <View style={styles.container}>
      <Stacknavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
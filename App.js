import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Account from './Account';
const App = () => {
  return (
    <NavigationContainer>
      <Account/>
    </NavigationContainer>
  );
}

export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

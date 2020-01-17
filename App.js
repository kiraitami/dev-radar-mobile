import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from './src/pages/routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: "bold",
    fontSize: 44
  }
});

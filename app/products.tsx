import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function ProductsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Our Products' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Products Page</Text>
        <Text style={styles.subtext}>You can build your product list here!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  }
});
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import  styles from './styles';
import  books from './styles';// Import shared styles and data

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}>Explore Our Collection</Text>
         <FlatList
          data={[...books, ...books]} // a larger list for scrolling
          numColumns={2}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item }) => (
            <View style={styles.productBookContainer}>
              <Image source={{ uri: item.image }} style={styles.productBookImage} />
              <Text style={styles.productBookTitle} numberOfLines={2}>{item.title}</Text>
            </View>
          )}
        />
    </View>
  );
}
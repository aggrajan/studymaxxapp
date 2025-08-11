import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import  styles from './styles';
import  books from './styles'; // Import shared styles and data

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to StudyMaxx!</Text>
        <Text style={styles.headerSubtitle}>Your journey to knowledge begins here.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Books</Text>
        <FlatList
          data={books}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Image source={{ uri: item.image }} style={styles.bookImage} />
              <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
            </View>
          )}
        />
      </View>

       <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryGrid}>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Science</Text></View>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>History</Text></View>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Math</Text></View>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Literature</Text></View>
        </View>
      </View>
    </ScrollView>
  );
}
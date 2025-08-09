import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function DiscoverSection() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/discoversec.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>LearnMaxx. PrepMaxx. ScoreMaxx.</Text>
        <Text style={styles.description}>
          Discover our newly launched series of Exam Oriented Study Material.
        </Text>
        <Link href="/products" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shop Books</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        overflow: 'hidden',
      },
      image: {
        width: '100%',
        height: 200,
      },
      textContainer: {
        padding: 16,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
      },
      description: {
        fontSize: 16,
        color: '#64748b',
        marginVertical: 12,
      },
      button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignSelf: 'flex-start',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
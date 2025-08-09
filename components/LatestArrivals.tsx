import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router';

interface Book {
    _id: string;
    title: string;
    image: ImageSourcePropType;
}

const latestBooks: Book[] = [
    { _id: "1", title: "Mathematics for Class 8", image: require('./assets/book-placeholder.png') },
    { _id: "2", title: "Mathematics for Class 10", image: require('./assets/book-placeholder.png') },
    { _id: "3", title: "Mathematics for Class 6", image: require('./assets/book-placeholder.png') },
];

const renderItem = ({ item }: { item: Book }) => (
    <Link href="/products" asChild>
        <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        </TouchableOpacity>
    </Link>
);

export default function LatestArrivals() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Arrivals</Text>
      <FlatList
        data={latestBooks}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: 'white',
        marginTop: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    card: {
        width: 150,
        marginRight: 16,
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0'
    },
    image: {
        width: 120,
        height: 160,
        marginBottom: 10,
    },
    title: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
        height: 40,
    },
});
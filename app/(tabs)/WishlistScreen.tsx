import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; // Import shared styles

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}>Your Wishlist</Text>
        <View style={styles.emptyStateContainer}>
            <Ionicons name="heart-outline" size={80} color="#ccc" />
            <Text style={styles.emptyStateText}>Your wishlist is empty.</Text>
            <Text style={styles.emptyStateSubtext}>Tap the heart on any product to add it here.</Text>
        </View>
    </View>
  );
}
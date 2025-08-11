
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; // Import shared styles

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.pageTitle}>My Profile</Text>
        <View style={styles.profileHeader}>
            <Image source={{uri: 'https://placehold.co/100x100/4A90E2/FFFFFF?text=User'}} style={styles.profileAvatar} />
            <Text style={styles.profileName}>Alex Doe</Text>
            <Text style={styles.profileEmail}>alex.doe@example.com</Text>
        </View>
        <View style={styles.profileOptions}>
            <View style={styles.optionRow}><Text style={styles.optionText}>My Orders</Text><Ionicons name="chevron-forward" size={24} color="#ccc" /></View>
            <View style={styles.optionRow}><Text style={styles.optionText}>Settings</Text><Ionicons name="chevron-forward" size={24} color="#ccc" /></View>
            <View style={styles.optionRow}><Text style={styles.optionText}>Help Center</Text><Ionicons name="chevron-forward" size={24} color="#ccc" /></View>
            <View style={styles.optionRow}><Text style={styles.optionText}>Logout</Text><Ionicons name="chevron-forward" size={24} color="#ccc" /></View>
        </View>
    </View>
  );
}
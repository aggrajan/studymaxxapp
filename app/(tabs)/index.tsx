import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BannerCarousel from '../../components/BannerCarousel';
import DiscoverSection from '../../components/DiscoverSection';
import LatestArrivals from '../../components/LatestArrivals';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <BannerCarousel />
      <DiscoverSection />
      <LatestArrivals />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});
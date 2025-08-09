import React from 'react';
import { View, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Define the type for our banner data
interface BannerItem {
  id: number;
  image: ImageSourcePropType;
}

const bannerData: BannerItem[] = [
  { id: 1, image: require('./assets/mweb1.png') },
  { id: 2, image: require('./assets/mweb2.png') },
  { id: 3, image: require('./assets/mweb3.png') },
];

const { width: screenWidth } = Dimensions.get('window');

export default function BannerCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={screenWidth}
        height={screenWidth * 0.5}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});
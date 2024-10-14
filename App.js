import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    text: 'Scan, Pay & Enjoy!',
    image: require('./assets/Mask Group.png'),
    description: 'Scan products you want to buy at your favorite store, pay by your phone & enjoy a happy, friendly Shopping!',
    backgroundColor: '#ffffff',
  },
  {
    key: '2',
    text: 'Other cool stuff',
    image: require('./assets/cam1.jpg'),
    description: 'Save time with modern technology. Just a few taps to complete your purchase!',
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    text: 'Payment Success, Yayy!',
    image: require('./assets/Group 167.png'),
    description: 'we will send order details and invoice in your contact no. and registered email',
    backgroundColor: '#22bcb5',
  },
];

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const onDone = () => {
    setShowRealApp(true);
  };

  const handleBackToIntro = () => {
    setShowRealApp(false);
  };

  if (showRealApp) {
    return (
      <View style={styles.container}>
        <Text style={styles.realAppText}>Your Main Application</Text>
        <Button title="Back to Intro" onPress={handleBackToIntro} />
      </View>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
    paddingHorizontal: 20,
  },
  realAppText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  
  dotStyle: {
    backgroundColor: 'gray',
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#5F79E3', 
    width: 7,
    height: 7,
    borderRadius: 6,
marginHorizontal: 3,
  },
});
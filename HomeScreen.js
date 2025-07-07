// HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const animeList = [
  { id: '1', title: 'Monogatari Series', image: require('./assets/MONO.jpg') },
  { id: '2', title: 'Hibike! Euphonium', image: require('./assets/Hibimeshi.jpg') },
  { id: '3', title: 'Zatsu Zatsu Life', image: require('./assets/zatsuu.jpg') },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detail', { anime: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animeList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  item: { marginBottom: 15, alignItems: 'center' },
  image: { width: 300, height: 180, borderRadius: 10 },
  title: { marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});

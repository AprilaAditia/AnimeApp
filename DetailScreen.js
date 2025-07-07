// DetailScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { anime } = route.params;
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <View style={styles.container}>
      <Image source={anime.image} style={styles.image} />
      <Text style={styles.title}>{anime.title}</Text>

      <TextInput
        style={styles.input}
        placeholder="Deskripsi"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
});

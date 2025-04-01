import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';

const amigos = [
  { id: 1, nome: 'Alejandra', emoji: '🐆'},
  { id: 2, nome: 'Bruna', emoji: '🐖'},
  { id: 3, nome: 'Fernanda', emoji: '🧛‍♀️'},
  { id: 4, nome: 'Nathália', emoji: '🦄'},
  { id: 5, nome: 'Samuel', emoji: '🦇'},
  { id: 6, nome: 'Sara', emoji: '🦖'},
  { id: 7, nome: 'Laura', emoji: '🐇'},
  { id: 8, nome: 'Evelyn', emoji: '🦊'},
  { id: 9, nome: 'Ana Carol', emoji: '👻'},
  { id: 10, nome: 'Giovanna', emoji: '👽'},
  { id: 11, nome: 'Luizao', emoji: '😎'},
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>AMIGOS</Text>
        <FlatList
          data={amigos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.nome}>{item.nome}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
    color: '#9370DB',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    border: '4px solid #9370DB',
    borderRadius: 10,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 30,
    marginRight: 10,
  },
  nome: {
    fontSize: 18,
  },
});
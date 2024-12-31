import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import JobCard from './JobCard';

const SavedScreen = ({ route }) => {
  const { savedJobs } = route.params;

  return (
    <View style={styles.container}>
      {savedJobs.length === 0 ? (
        <Text style={styles.emptyText}>No saved jobs yet.</Text>
      ) : (
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <JobCard job={item} onView={() => console.log('View Job', item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 15,
  },
  emptyText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SavedScreen;

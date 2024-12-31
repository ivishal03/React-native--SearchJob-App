import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const JobCard = ({ job, onView, onSave }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave(job, !isSaved); // Pass the job and save status to parent
  };

  return (
    <View style={[styles.card, { backgroundColor: job.color }]}>
      {/* Job Header */}
      <View style={styles.header}>
        <Image source={{ uri: job.logo }} style={styles.logo} />
        <View style={styles.jobInfo}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
        <View style={styles.actions}>
          {/* Save Icon */}
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <FontAwesome
              name={isSaved ? 'bookmark' : 'bookmark-o'}
              size={30}
              color="white"
            />
          </TouchableOpacity>

          {/* View Button */}
          <TouchableOpacity onPress={() => onView(job)} style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View →</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Job Details */}
      <View style={styles.details}>
        <Text style={styles.detailText}>📍 {job.location}</Text>
        <Text style={styles.detailText}>⌛ {job.experience}</Text>
        <Text style={styles.detailText}>🕒 {job.type}</Text>
      </View>
      <Text style={styles.description}>
        {job.description}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.posted}>📅 Posted {job.posted}</Text>
        <Text style={styles.salary}>💰 {job.salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 15,
    padding: 15,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  jobInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  company: {
    fontSize: 14,
    color: '#EEE',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    marginRight: 10,
  },
  viewButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailText: {
    color: '#EEE',
    fontSize: 12,
  },
  description: {
    marginTop: 10,
    color: '#FFF',
    fontSize: 14,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  posted: {
    fontSize: 12,
    color: '#DDD',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default JobCard;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const JobDetailScreen = ({ route }) => {
  const { job } = route.params;

  const handleSave = () => {
    console.log('Job saved:', job.title);
  };

  const handleApply = () => {
    console.log('Applied for job:', job.title);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Dynamic Header Section */}
        <View style={[styles.dynamicHeader, { backgroundColor: job.color }]}>
          <Image source={{ uri: job.logo }} style={styles.logo} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.companyName}>{job.company}</Text>
            <View style={styles.jobDetails}>
              <Text style={styles.detail}>📍 {job.location}</Text>
              <Text style={styles.detail}>⌛ {job.experience}</Text>
              <Text style={styles.detail}>🕒 {job.type}</Text>
            </View>
          </View>
          <Text style={styles.salary}>💰 {job.salary}</Text>
        </View>

        {/* Job Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📝 Job Description</Text>
          <Text style={styles.sectionText}>{job.jobDescription}</Text>
        </View>

        {/* Skills & Requirements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✅ Skills & Requirements</Text>
          {job.skills.map((skill, index) => (
            <Text key={index} style={styles.bulletPoint}>
              • {skill}
            </Text>
          ))}
        </View>

        {/* Your Role */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👤 Your Role</Text>
          <Text style={styles.sectionText}>{job.role}</Text>
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏆 Benefits</Text>
          {job.benefits.map((benefit, index) => (
            <Text key={index} style={styles.bulletPoint}>
              • {benefit}
            </Text>
          ))}
        </View>
        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>

      {/* Floating Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Now →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dynamicHeader: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  companyName: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    color: 'white',
    fontSize: 12,
    marginRight: 10,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#EEE',
    lineHeight: 22,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#EEE',
    marginLeft: 10,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  saveButton: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  saveButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#5E5CE6',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JobDetailScreen;

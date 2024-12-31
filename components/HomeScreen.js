import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import JobCard from './JobCard';
import jobData from '../components/jobData'; // Import the job data

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Discover'); // State to manage active tab
  const [savedJobs, setSavedJobs] = useState([]); // State to manage saved jobs
  const [appliedJobs, setAppliedJobs] = useState([]); // State to manage applied jobs
  const [closedJobs, setClosedJobs] = useState([]); // State to manage closed jobs

  // Get the list of jobs to display based on the active tab
  const getFilteredJobs = () => {
    if (activeTab === 'Saved') {
      return savedJobs;
    } else if (activeTab === 'Applied') {
      return appliedJobs;
    } else if (activeTab === 'Closed') {
      return closedJobs;
    }
    return jobData; // Default to all jobs in "Discover"
  };

  const handleSaveJob = (job, isSaved) => {
    if (isSaved) {
      setSavedJobs((prev) => [...prev, job]);
    } else {
      setSavedJobs((prev) => prev.filter((savedJob) => savedJob.id !== job.id));
    }
  };

  const handleApplyJob = (job) => {
    if (!appliedJobs.find((appliedJob) => appliedJob.id === job.id)) {
      setAppliedJobs((prev) => [...prev, job]);
    }
  };

  const handleCloseJob = (job) => {
    if (!closedJobs.find((closedJob) => closedJob.id === job.id)) {
      setClosedJobs((prev) => [...prev, job]);
    }
  };

  const handleProfileNavigation = () => {
    navigation.navigate('ProfileScreen'); // Navigate to ProfileScreen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Vishal Thakur 👋</Text>
        <TouchableOpacity
          style={styles.profileButton}
          
          onPress={handleProfileNavigation}
        >
          <Text style={styles.profileText}>V</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Find Jobs</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Discover', 'Saved', 'Applied', 'Closed'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for company or roles..."
        placeholderTextColor="#666"
      />

      {/* Job List */}
      <FlatList
        data={getFilteredJobs()} // Filter jobs based on the active tab
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            onView={(job) => navigation.navigate('JobDetailScreen', { job })}
            onSave={(job, isSaved) => handleSaveJob(job, isSaved)}
            onApply={(job) => handleApplyJob(job)} // Mock function for applying jobs
            onClose={(job) => handleCloseJob(job)} // Mock function for closing jobs
          />
        )}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No jobs found for the selected tab.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    color: '#FFF',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#1E1E1E',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#444',
  },
  activeTab: {
    backgroundColor: '#5E5CE6',
  },
  tabText: {
    color: '#DDD',
    fontSize: 14,
  },
  activeTabText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'black',
    marginBottom: 20,
  },
  list: {
    flex: 1,
  },
  emptyText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;

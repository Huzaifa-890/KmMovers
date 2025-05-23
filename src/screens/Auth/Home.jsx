import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const carouselItems = [
  { id: 1, image: require('../../assets/Onboadring/Onboarding.png') },
  { id: 2, image: require('../../assets/Onboadring/Onboarding.png') },
];

const services = [
  {
    id: '1',
    title: 'Office Shifting',
    image: require('../../assets/Onboadring/Onboarding.png'),
  },
  {
    id: '2',
    title: 'Furniture Moving',
    image: require('../../assets/Onboadring/Onboarding.png'),
  },
  {
    id: '3',
    title: 'House Shifting',
    image: require('../../assets/Onboadring/Onboarding.png'),
  },
];

const packingServices = [
  {
    id: '1',
    title: 'Packing Services',
    subtitle: 'Ambasia Hotel & Restaurant',
    image: require('../../assets/Onboadring/Onboarding.png'),
    rating: 4.7,
  },
  {
    id: '2',
    title: 'Packing Services',
    subtitle: 'Ambasia Hotel & Restaurant',
    image: require('../../assets/Onboadring/Onboarding.png'),
    rating: 4.7,
  },
];

const Home = () => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Homepage</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <TextInput placeholder="Where you want go" style={styles.searchInput} />
      </View>

      {/* Carousel without library */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {carouselItems.map((item) => (
            <Image
              key={item.id}
              source={item.image}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </View>

      {/* Services Section */}
      <SectionHeader title="Mover and Packer Services" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={services}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            <Image
              source={item.image}
              style={styles.serviceImage}
              resizeMode="contain"
            />
            <Text style={styles.serviceTitle}>{item.title}</Text>
            <Text style={styles.serviceSubtitle}>From one location to another</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.horizontalList}
      />

      {/* Packing Services Section */}
      <SectionHeader title="Packing Services" />
      {packingServices.map((item) => (
        <View key={item.id} style={styles.packingCard}>
          <Image
            source={item.image}
            style={styles.packingImage}
            resizeMode="contain"
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.packingTitle}>{item.title}</Text>
            <Text style={styles.packingSubtitle}>{item.subtitle}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>Book</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const SectionHeader = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.seeAll}>See all</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1aaf',
    paddingBottom: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    color: '#fff',
    fontSize: 24,
  },
  searchBox: {
    margin: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    height: 45,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselImage: {
    width: width,
    height: 180,
    borderRadius: 15,
    marginRight: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  seeAll: {
    color: '#1a1aaf',
    fontWeight: '600',
  },
  horizontalList: {
    paddingLeft: 15,
    marginBottom: 20,
  },
  serviceCard: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  serviceImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  serviceTitle: {
    fontWeight: '600',
    marginTop: 5,
  },
  serviceSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  packingCard: {
    flexDirection: 'row',
    marginHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  packingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  packingTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  packingSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  rating: {
    fontSize: 12,
    color: '#999',
  },
  bookButton: {
    backgroundColor: '#1a1aaf',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  bookText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;

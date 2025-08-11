import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  bookContainer: {
    marginRight: 15,
    width: 150,
  },
  bookImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  bookTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
      width: '48%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      height: 100,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 3.84,
      elevation: 5,
  },
  categoryText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333'
  },
  pageTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
  },
  productBookContainer: {
    flex: 0.5,
    margin: 5,
    alignItems: 'center'
  },
  productBookImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  productBookTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptyStateContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  emptyStateText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#555',
      marginTop: 20,
  },
  emptyStateSubtext: {
      fontSize: 16,
      color: '#888',
      marginTop: 10,
      textAlign: 'center',
      paddingHorizontal: 30,
  },
  profileHeader: {
      alignItems: 'center',
      marginVertical: 20,
  },
  profileAvatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
  },
  profileName: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 15,
  },
  profileEmail: {
      fontSize: 16,
      color: '#777',
      marginTop: 5,
  },
  profileOptions: {
      marginTop: 20,
  },
  optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
  },
  optionText: {
      fontSize: 18,
      fontWeight: '500',
  }
});

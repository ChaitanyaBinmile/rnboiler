import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20,
    textAlign: 'center',
  },
  autoCompleteContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    },
  list: {
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200, 
    marginTop: 5,
    
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.8,
    borderBottomColor: '#eee',
    color: '#000', 
    fontSize: 16,
  },
});

export default styles;

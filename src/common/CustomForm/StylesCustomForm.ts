import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
  fieldContainer: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: 'red',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 70,
    width: '100%',
    fontSize: 16,
    paddingLeft: 12,
    color: '#333',
  },
  errorText: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: '#004CFFFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

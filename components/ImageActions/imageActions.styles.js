import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    left: 0,
    zIndex: 2,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  options: { flexDirection: 'row' },
  button: {
    margin: 5,
  },
  buttonContents: {
    color: '#fff',
  },
});

export default styles;

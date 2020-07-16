import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHolder: {
    backgroundColor: 'rgba(0,0,0,0.44)',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});

export default styles;

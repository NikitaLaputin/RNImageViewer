import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  header: {
    fontSize: 180,
    paddingTop: 24,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  galleryContainer: {
    flex: 1,
  },
  gallery: { flex: 1, backgroundColor: '#000000' },
});

export default styles;

import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').width * 0.6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontsize: 18,
  },
  description: {
    marginTop: 3,
  },
  inner_container: {
    padding: 5,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});

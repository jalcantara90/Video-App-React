import React from 'react';
import { 
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Suggestion = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Image 
            source={{uri: props.medium_cover_image}}
            style={styles.cover}
          />
          <View style={styles.genreContainer}>
            <Text style={styles.genreText}>{props.genres}</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.year}> {props.year} </Text>
          <Text style={styles.rating}> {props.rating} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    color: 'white',
    paddingVertical: 4,
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start'
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  },
  genreContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black'
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7
  }

})

export default Suggestion
import React from 'react';

import { 
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

const Category = (props) => {
  return(
    <ImageBackground 
      style={styles.wrapper}
      source={{
        uri: props.background_image
      }}
     >
      <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 95,
    borderRadius: 5,
    backgroundColor: '#0a8ecd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  genre: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 5,
    elevation: 1
  },
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0, .75)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1
  }
})

export default Category
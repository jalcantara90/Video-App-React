import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
const PlayerLayout = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.overlay}>
        <View>
        {
          props.loading &&
          props.loader
        }
        </View>
        {props.controls}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'black'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PlayerLayout;
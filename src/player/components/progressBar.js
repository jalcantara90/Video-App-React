import React from 'react';
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  StyleSheet
} from 'react-native';

const ProgressBar = (props) => {

  return(
    Platform.select({
      ios:  <ProgressViewIOS style={styles.progresBar} progressTintColor='#97c93e' trackTintColor='light-gray' progress={props.progress}/>,
      android: <ProgressBarAndroid style={styles.progresBar} progress={props.progress}/>
    })
  )
}

const styles = StyleSheet.create({
  progresBar: {
    width: 160
  }
})

export default ProgressBar
import React from 'react';

import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform
} from 'react-native';

import Icon from '../../icons/components/icon';

const PlayPause = props => {

  const playIcon = Platform.select({
    ios: 'ios-play',
    android: 'md-play',
  });

  const pauseIcon = Platform.select({
    ios: 'ios-pause',
    android: 'md-pause',
  });
  
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="rgba(0,0,0,0)"
      hitSlop = {{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5
      }}
    >
    {
      props.paused ?
      <Icon iconName={playIcon}/>
      :
      <Icon iconName={pauseIcon}/>
    }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 10,

    paddingVertical: 10,
    height: 40,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 50,

  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export default PlayPause;
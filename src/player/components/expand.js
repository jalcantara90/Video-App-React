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

const Expand = props => {

  const expandIcon = Platform.select({
    ios: 'ios-expand',
    android: 'md-expand',
  });

  const contractIcon = Platform.select({
    ios: 'ios-contract',
    android: 'md-contract'
  })
  
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
      props.fullScreen ?
      <Icon style={styles.expandIcon} iconName={contractIcon}/>
      :
      <Icon style={styles.expandIcon} iconName={expandIcon}/>
    }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 50,
  },
  expandIcon: {
    justifyContent: 'flex-end'
  }

})

export default Expand;
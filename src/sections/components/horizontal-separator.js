import React from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
const HorizontalSeparator = (props) => {
  return(
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: 5,
  }
});

export default HorizontalSeparator;
import React , { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native';
import Video from 'react-native-video';

import Layout from '../components/player-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
  state = {
    loading: true,
    paused: false
  }
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  onPress = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render() {
    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            paused={this.state.paused}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
          />
        }
        loader={
          <ActivityIndicator color="red"/>
        }
        controls={
          <ControlLayout>
            <PlayPause 
              onPress={this.onPress}
              paused={this.state.paused}
            />
            <Text>progress bar | </Text>
            <Text>time left |</Text>
            <Text>full screen</Text>
          </ControlLayout>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
      position:'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,    
  }
})

export default Player
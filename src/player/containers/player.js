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
import Expand from '../components/expand';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullScreen: false,
    duration: 0.00
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

  setFullScreenPromise = () => {
    return new Promise((resolve, reject) => {
      resolve(this.setState({
        fullScreen: !this.state.fullScreen
      }))
    }).catch(error => console.error(error))
  }
  fullScreen = () => {
    this.setFullScreenPromise()
      .then(() => {
        if(this.state.fullScreen)
          this.player.presentFullscreenPlayer();
        else this.player.dismissFullscreenPlayer();
      });
  }

  fullScreenPlayerWillDismiss = () => {
    this.setState({
      fullScreen: false
    })
  }

  onLoad = (payload) => {
    console.log(payload);
    let duration = payload.duration / 60;
    let mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    let totalTime = (mins + seconds * 10).toFixed(2);
    this.setState({
      duration: totalTime
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
            ref={(ref) => {
              this.player = ref
            }}
            onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
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
            <Text style={styles.duration}>{this.state.duration}</Text>
            <Expand onPress={this.fullScreen} fullScreen={this.state.fullScreen}/>
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
  },
  duration: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Player
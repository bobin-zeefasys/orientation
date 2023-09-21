import React, {useEffect, useRef} from 'react';
import {Dimensions, ScaledSize, StyleSheet, View} from 'react-native';
import Video from 'react-native-media-console';
import Orientation from 'react-native-orientation-locker';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {mediaJSON} from './movies';

// interface IVideoPlayerProps {
// source: String;
// }
const source =
  'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4';
const source2 = mediaJSON.videos[0].source;

function VideoPlayer() {
  // const {source} = props;
  const player: any = useRef(null);
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();
  const screen: ScaledSize = Dimensions.get('screen');
  const height = screen.height;
  const width = screen.width;

  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  const onLoad = () => {
    player?.current?.presentFullscreenPlayer();
  };
  const goBack = () => {
    const canGoBack = navigation.canGoBack();
    if (canGoBack) {
      navigation.goBack();
    }
  };
  return (
    <Video
      videoRef={player}
      source={{uri: source}} // Can be a URL or a local file.
      style={styles.backgroundVideo}
      // style={{height, width}}
      onLoad={onLoad}
      fullscreen
      fullscreenAutorotate
      fullscreenOrientation="landscape"
      controls
      onEnd={goBack}
      onBack={goBack}
      showOnStart
      showOnEnd
      resizeMode='contain'
    />
  );
}
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
});
export {VideoPlayer};

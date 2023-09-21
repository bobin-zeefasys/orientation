import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import Orientation from 'react-native-orientation-locker';

export function OrientationScreen() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> =
    useNavigation();

  const onClickLandscape = () => {
    // console.log('landscape clicked');
    Orientation.lockToLandscape();
  };

  const onClickPortrait = () => {
    // console.log('portrait clicked');
    Orientation.lockToPortrait();
  };

  const navToVideoPlayer = () => {
    navigation.navigate('Player');
  };

  return (
    <View>
      <Button title="portrait" onPress={onClickPortrait} />
      <Button title="landscpae" onPress={onClickLandscape} />
      <Button title="Video Player" onPress={navToVideoPlayer} />
    </View>
  );
}

const styles = StyleSheet.create({});

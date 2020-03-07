import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function Translate() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(0));

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start();
    });
  }

  const animationStyle = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };
  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

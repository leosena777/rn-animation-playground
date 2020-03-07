import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function Opacity() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(1));

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 0.01,
      duration: 2000,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
      }).start();
    });
  }

  const animatedStyle = {
    opacity: animation,
  };

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animatedStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

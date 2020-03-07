import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(0));

  const widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '50%'],
  });


  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '30%'],
  });

  const animationStyle = {
    width: widthInterpolate,
    heigth: heightInterpolate,
  };

  function startAnimation() {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start();
  }

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(0));

  function startAnimation() {}

  const animationStyle = {};

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(0));
  const [isRunAnimation, setIsRunAnimation] = useState(false);

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animationStyle = {
    transform: [
      {
        rotate: rotateInterpolate,
      },
    ],
  };

  function startAnimation() {
    if (isRunAnimation) {
      return;
    }
    setIsRunAnimation(true);
    Animated.timing(animation, {
      toValue: 360,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start(() => {
        setIsRunAnimation(false);
      });
    });
  }

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

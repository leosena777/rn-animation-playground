import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(0));
  const [isRunAnimation, setIsRunAnimation] = useState(false);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  const colorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
  });

  const boxAnimationStyle = {
    backgroundColor: boxInterpolation,
  };

  const textAnimationStyle = {
    color: colorInterpolation,
  };

  const startAnimation = () => {
    console.log('isRunAnimation', isRunAnimation);

    if (isRunAnimation) {
      console.log('run');
      return;
    }
    setIsRunAnimation(true);

    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
      }).start(() => {
        setIsRunAnimation(false);
      });
    });
  };

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, boxAnimationStyle]}>
          <Animated.Text style={textAnimationStyle}>
            Hello Animation!
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

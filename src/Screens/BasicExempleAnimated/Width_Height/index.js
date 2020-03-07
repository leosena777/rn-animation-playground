import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import style from './style';

export default function Translate() {
  const {container, box} = style;
  const [animation] = useState(new Animated.Value(200));

  const animationStyle = {
    width: animation,
    height: animation,
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 1500,
    }).start();
  };

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[box, animationStyle]}>
          <Text>
            A animação digital é a arte de criar imagens em movimento utilizando
            computadores, mais especificamente usando recursos de computação
            gráfica.
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

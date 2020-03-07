import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Animated } from "react-native";
import style from "./style";

export default function Opacity() {
  const { container, box } = style;

  const [animation, setAnimation] = useState(new Animated.Value(1));
  const [typeAnimation, setTypeAnimation] = useState("big");

  const animationStyle = {
    transform: [{ scale: animation }]
  };

  function startBigger() {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  function startSmaller() {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  function handleAnimation() {
    if (typeAnimation == "big") {
      setTypeAnimation("small");
      startBigger();
    } else {
      setTypeAnimation("big");
      startSmaller();
    }
  }

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={handleAnimation}>
        <Animated.View style={[box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

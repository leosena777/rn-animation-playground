import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

export default function Home(props) {
  const {navigation} = props;
  const {container, btn, txtBtn} = style;
  return (
    <View style={container}>
      <TouchableOpacity
        style={btn}
        onPress={() => navigation.navigate('Opacity')}>
        <Text style={txtBtn}>Opacity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={btn}
        onPress={() => navigation.navigate('Translate')}>
        <Text style={txtBtn}>Translate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={btn}
        onPress={() => navigation.navigate('Scale')}>
        <Text style={txtBtn}>Scale</Text>
      </TouchableOpacity>
    </View>
  );
}

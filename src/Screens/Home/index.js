import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import style from './style';

export default function Home(props) {
  const {navigation} = props;
  const {container, btn, txtBtn, header} = style;
  return (
    <ScrollView>
      <View style={container}>
        <Text style={header}>Basic Exemples Animated</Text>
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

        <TouchableOpacity
          style={btn}
          onPress={() => navigation.navigate('Width_Height')}>
          <Text style={txtBtn}>Width e Height</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={btn}
          onPress={() => navigation.navigate('PositionAbsolute')}>
          <Text style={txtBtn}>Position Absolute</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={btn}
          onPress={() => navigation.navigate('ColorBackground')}>
          <Text style={txtBtn}>Color and Background Color</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={btn}
          onPress={() => navigation.navigate('Rotation')}>
          <Text style={txtBtn}>Rotation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={btn}
          onPress={() => navigation.navigate('Percent')}>
          <Text style={txtBtn}>Percentage</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

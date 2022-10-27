import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';

export default function LoginButton({title, googlePlus, onPress}) {
  return (
    <TouchableOpacity style={tw`self-center mb-5`} onPress={onPress}>
      <View
        style={tw`w-70 h-12 ${
          googlePlus ? 'bg-[#F83C3B]' : 'bg-[#3B5999]'
        } flex-row rounded-lg shadow-md justify-center items-center`}>
        {googlePlus ? (
          <AntDesign name="googleplus" size={20} color="#fff" />
        ) : (
          <MaterialCommunityIcons name="facebook" size={20} color="#fff" />
        )}
        <Text style={tw`text-center text-white px-2 text-sm font-medium`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

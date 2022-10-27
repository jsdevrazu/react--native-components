import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import tw from 'twrnc';
import COLORS from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({
  title = '',
  isOutline,
  onPress,
  text = 16,
  fontWeight = '600',
  style,
  color = `${COLORS.primary}`,
  textColor = `${COLORS.white}`,
  icon = null,
}) => {
  return (
    <>
      {!isOutline ? (
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={['#2FC8B3', '#119986']}
            style={[
              tw` w-full rounded-xl px-4  ${
                icon !== null && title !== '' ? 'justify-center' : ''
              } ${icon !== null ? 'flex-row items-center' : ''} py-4 ${
                title === 'No' ? `border-2 border-[${COLORS.primary}]` : ''
              }`,
              style,
              {backgroundColor: color},
            ]}>
            <View
              style={tw`${icon !== null ? 'flex-row items-center' : ''} ${
                title === 'No' ? `border-2 border-[${COLORS.primary}]` : ''
              }`}>
              {icon && icon}
              <Text
                style={[
                  tw`text-[${COLORS.white}] text-center ${
                    icon !== null && title !== '' ? 'ml-4' : ''
                  }`,
                  {fontSize: text, fontWeight: fontWeight, color: textColor},
                ]}>
                {title}
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            tw` w-full rounded-xl px-4  ${
              icon !== null && title !== '' ? 'justify-center' : ''
            } ${icon !== null ? 'flex-row items-center' : ''} py-4 ${
              title === 'No' ? `border-2 border-[${COLORS.primary}]` : ''
            }`,
            style,
            {backgroundColor: color},
          ]}
          onPress={onPress}>
          {icon && icon}
          <Text
            style={[
              tw`text-[${COLORS.white}] text-center ${
                icon !== null && title !== '' ? 'ml-4' : ''
              }`,
              {fontSize: text, fontWeight: fontWeight, color: textColor},
            ]}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
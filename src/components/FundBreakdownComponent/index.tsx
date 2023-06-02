import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
  logo: ImageSourcePropType;
  image: ImageSourcePropType;
};
export function FundBreakdownComponent({text, logo, image}: Props) {
  return (
    <TouchableOpacity>
      <Image source={image} />
      <Image source={logo} />
      <Text>{text}</Text>

      <Text>Read more</Text>
    </TouchableOpacity>
  );
}

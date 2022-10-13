import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

const SliderContainer = props => {
  const {sliderValue, trackMarks, setLow, setHigh} = props;
  const [value, setValue] = React.useState(sliderValue ? sliderValue : 0.2);
  let renderTrackMarkComponent;

  const renderChildren = () => {
    return React.Children.map(props.children, child => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  useEffect(() => {
    setLow && setLow(value[0]);
    setHigh && setHigh(value[1]);
  }, [value]);

  useEffect(() => {
    setValue(sliderValue);
  }, [sliderValue]);

  return <View>{renderChildren()}</View>;
};

export default SliderContainer;

import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import tw from 'twrnc';
import Slider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Label from './Label';
import Notch from './Notch';

const RangeSlider = ({low, setLow, high, setHigh, max, min}) => {
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <>
      <View style={tw`justify-between px-4 flex-1 w-full`}>
        <View>
          <View style={tw`flex-row items-center justify-between px-6 mt-10`}>
            <View
              style={tw`border rounded-md border-gray-300 p-4 w-20 items-center justify-center h-14 items-center justify-center`}>
              <Text>{low}</Text>
            </View>
            <View
              style={tw`border rounded-md border-gray-300 p-4 w-20 items-center justify-center h-14 items-center justify-center`}>
              <Text>{high}</Text>
            </View>
          </View>
          <View style={tw`px-4`}>
            <Slider
              style={tw`mt-10`}
              min={min}
              max={max}
              step={1}
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
          </View>
        </View>
        <TouchableOpacity style={[tw`bg-[#0000ff] px-4 py-3 rounded-md mb-4`]}>
          <Text style={tw`text-center text-white`}>Toon 20 artikelen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RangeSlider;

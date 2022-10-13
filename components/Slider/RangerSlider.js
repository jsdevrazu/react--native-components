import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Slider} from '@miblanchard/react-native-slider';
import SliderContainer from './SliderContainer';

const RangeSlider = ({toggleModal1, min, max, low, high, setLow, setHigh}) => {
  const changeLowValue = e => {
    setLow(e);
    if (e <= min) {
      setLow(min);
    } else if (e >= high) {
      setLow(high - 10);
    } else {
      setLow(e);
    }
  };
  const changeHighValue = e => {
    if (e >= max) {
      setHigh(max);
    } else if (e <= low) {
      setHigh(low + 10);
    } else {
      setHigh(e);
    }
  };

  return (
    <>
      <View
        style={[
          tw`flex-row justify-between items-center px-4 mt-4`,
          {
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            overflow: 'hidden',
          },
        ]}>
        <View style={tw`justify-center items-center w-[95%]`}>
          <Text style={tw`font-bold text-black text-lg`}>Prijs</Text>
        </View>
        <TouchableOpacity style={tw`mr-4`} onPress={toggleModal1}>
          <AntDesign name="close" color="blue" size={25} />
        </TouchableOpacity>
      </View>
      <View style={tw`justify-between px-4 flex-1 w-full`}>
        <View>
          <View style={tw`flex-row items-center justify-between px-6 mt-10`}>
            <TextInput
              keyboardType="numeric"
              maxLength={4}
              style={tw`border text-gray-400 rounded-md border-gray-300 p-4 w-20 items-center justify-center h-14 items-center justify-center`}
              value={low.toString()}
              onChangeText={changeLowValue}
            />
            <TextInput
              keyboardType="numeric"
              maxLength={4}
              style={tw`border text-gray-400 rounded-md border-gray-300 p-4 w-20 items-center justify-center h-14 items-center justify-center`}
              value={high.toString()}
              onChangeText={changeHighValue}
            />
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <SliderContainer
              sliderValue={[Number(low), Number(high)]}
              setLow={setLow}
              setHigh={setHigh}>
              <Slider
                minimumValue={min}
                maximumValue={max}
                step={1}
                trackClickable={true}
                maximumTrackTintColor="#d3d3d3"
                minimumTrackTintColor="#0000ff"
                thumbTintColor="#0000ff"
              />
            </SliderContainer>
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

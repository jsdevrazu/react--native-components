import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import React, {useCallback, useState} from 'react';
import tw from 'twrnc';
import Slider from 'rn-range-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Thumb from './components/Thumb';
import Rail from './components/Rail';
import RailSelected from './components/RailSelected';
import Label from './components/Label';
import Notch from './components/Notch';

const filterData = [
  'jbl',
  'sony',
  'seenheiser',
  'philipp',
  'bose',
  'beasts By Dre',
  // 'fresh in Rabel',
  // 'apple',
  // 'marshall',
  // 'jvc',
  // 'bang clufsen',
  // 'skullcandy',
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState(filterData);
  const [search, setSearch] = useState('');
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');

  const onChange = text => {
    console.log(data?.filter(e => e == search));
    setData(data.filter(e => e == search.toLowerCase()));
    setSearch(text);
  };

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  const Item = ({title, index}) => (
    <TouchableOpacity
      onPress={() => setActiveIndex(index)}
      style={tw`border-b border-gray-300 pb-2 pt-2 flex-row justify-between items-center`}>
      <Text
        style={tw`text-sm capitalize ${
          activeIndex == index && 'text-blue-700 font-bold'
        }`}>
        {title}
      </Text>
      {activeIndex == index && (
        <AntDesign name="check" color="blue" size={25} />
      )}
    </TouchableOpacity>
  );

  const renderItem = ({item, index}) => <Item index={index} title={item} />;

  return (
    <>
      <View style={tw`mt-2 px-6`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-blue-500 text-xl`}>Wissen</Text>
          <Text style={tw`text-black font-bold text-xl`}>Mark</Text>
          <AntDesign name="close" color="blue" size={30} />
        </View>
        {/* Search Input */}
        <View style={tw`relative mt-4 mb-4`}>
          <TextInput
            style={tw`bg-[#eeeeef] px-10 py-2 rounded-full`}
            onChangeText={onChange}
            value={search}
            placeholder="Search here...."
            placeholderTextColor="#0000ff63"
          />
          <View style={tw`absolute top-4 left-3`}>
            <AntDesign name="search1" color="#0000ff" size={15} />
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
        <TouchableOpacity style={tw`bg-blue-600 px-4 py-3 rounded-md mt-10`}>
          <Text style={tw`text-center text-white`}>Toon 20 artikelen</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center justify-between px-6 mt-10`}>
        <View
          style={tw`border rounded-md border-gray-300 p-4 w-20 items-center justify-center h-20 items-center justify-center`}>
          <Text>{low}</Text>
        </View>
        <View
          style={tw`border rounded-md border-gray-300 p-4 w-20 items-center justify-center h-20 items-center justify-center`}>
          <Text>{high}</Text>
        </View>
      </View>
      <Slider
        style={tw`mb-20`}
        min={9}
        max={2300}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </>
  );
};

export default App;

import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';

const FlatListItem = ({data: myData, toggleModal}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data] = useState(myData);
  const [datatToShow, setDataToShow] = useState(myData);
  const [search, setSearch] = useState('');

  const onChange = text => {
    setSearch(text);
    const filterData = data.filter(item => item.includes(text));
    setDataToShow(filterData);
  };

  const handlePress = index => {
    setActiveIndex(index);
  };

  const Item = ({title, index}) => (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={tw`border-b border-gray-300 pb-2 pt-2 flex-row justify-between items-center`}>
      <Text
        style={tw`text-sm capitalize ${
          activeIndex != null && activeIndex == index
            ? 'text-blue-600 font-bold'
            : 'text-gray-500'
        }`}>
        {title}
      </Text>
      {activeIndex != null && activeIndex == index && (
        <AntDesign name="check" color="blue" size={25} />
      )}
    </TouchableOpacity>
  );

  const renderItem = ({item, index}) => <Item index={index} title={item} />;

  return (
    <>
      <View style={tw`mt-2 px-6 mt-3`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-semibold text-[#0000ff]`}>Wissen</Text>
          </View>
          <View>
            <Text style={tw`font-bold text-black text-lg`}>Merk</Text>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="close" color="blue" size={25} />
          </TouchableOpacity>
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
          data={datatToShow}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
        <TouchableOpacity style={tw`bg-[#0000ff] px-4 py-3 rounded-md mt-10`}>
          <Text style={tw`text-center text-white`}>Toon 20 artikelen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FlatListItem;

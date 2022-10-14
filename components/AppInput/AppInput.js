import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';

const AppInput = ({toggleModal}) => {
  const [images, setImages] = useState([]);
  const imageLength = images.length;

  function showMessage() {
    Alert.alert('Upload image', 'Choose a option', [
      {
        text: 'Gallery',
        onPress: () => imageLength != 6 && openLibrary(),
      },
    ]);
  }

  const openLibrary = () => {
    launchImageLibrary({mediaType: 'photo', quality: 1}, res => {
      setImages([...images, res]);
    });
  };

  const handleDelete = myImg => {
    const filterImage = images?.filter(img => img?.uri != myImg);
    setImages(filterImage);
  };

  return (
    <View style={tw`px-6`}>
      <View style={tw`flex-row justify-between items-center px-4 mt-4`}>
        <View style={tw`justify-center items-center w-[95%]`}>
          <Text style={tw`font-bold text-black text-lg`}>App Input</Text>
        </View>
        <TouchableOpacity style={tw`mr-4`} onPress={toggleModal}>
          <AntDesign name="close" color="blue" size={25} />
        </TouchableOpacity>
      </View>
      {images?.length == 0 && (
        <View style={tw`items-center justify-center`}>
          <TouchableOpacity
            style={tw`border border-gray-200 justify-center items-center w-full h-40 rounded-md mt-10`}
            activeOpacity={0.5}
            onPress={showMessage}>
            <AntDesign name="camera" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      )}
      {/* Render Images Here */}
      <View style={tw`flex-row items-center mt-10 flex-wrap`}>
        {images?.map((img, index) => (
          <TouchableOpacity
            style={tw`w-24 h-24 mr-3 relative mb-4`}
            key={index}>
            <Image
              style={tw`w-full h-full rounded-md`}
              source={{
                uri: img.uri,
              }}
            />
            <TouchableOpacity
              style={tw`absolute top-0 right-0 bg-red-500 w-8 h-8 items-center justify-center rounded-md`}
              onPress={() => handleDelete(img?.uri)}>
              <AntDesign name="close" color="white" size={20} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        {images?.length > 0 && imageLength != 6 && (
          <TouchableOpacity
            style={tw`border border-gray-200 justify-center items-center w-24 h-24 rounded-md`}
            activeOpacity={0.5}
            onPress={showMessage}>
            <AntDesign name="camera" color="gray" size={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AppInput;

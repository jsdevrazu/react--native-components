import {useState} from 'react';
import FlatListItem from './components/RenderList/FlatListItem';
import RangeSlider from './components/Slider/RangerSlider';
import {Text, TouchableOpacity, View, Modal, StatusBar} from 'react-native';
import tw from 'twrnc';
import AppInput from './components/AppInput/AppInput';

const myData = [
  'jbl',
  'sony',
  'seenheiser',
  'philipp',
  'bose',
  'beasts By Dre',
  'fresh in Rabel',
  'apple',
  'orange',
  'marshall',
  'bang & olufsen',
  'jvc',
  'skullcandy',
];

const App = () => {
  const [min] = useState(9);
  const [max] = useState(2300);
  const [low, setLow] = useState(9);
  const [high, setHigh] = useState(2300);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible3] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };
  const toggleModal2 = () => {
    setModalVisible3(!isModalVisible2);
  };

  return (
    <>
      <View style={tw`flex-1 items-center justify-center bg-gray-900`}>
        <TouchableOpacity onPress={toggleModal} style={tw`mb-6`}>
          <Text style={tw`text-white`}>Open Render List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal1}  style={tw`mb-6`}>
          <Text style={tw`text-white`}>Open Input slider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal2}>
          <Text style={tw`text-white`}>Open Image Selector</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={tw`flex-1 bg-white rounded-t-2xl`}>
          <StatusBar hidden={true} />
          <FlatListItem toggleModal={toggleModal} data={myData} />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        hardwareAccelerated
        visible={isModalVisible1}
        onRequestClose={toggleModal1}>
        <View style={tw`flex-1 bg-white rounded-t-2xl`}>
          <StatusBar hidden={true} />
          <RangeSlider
            low={low}
            setLow={setLow}
            high={high}
            setHigh={setHigh}
            toggleModal1={toggleModal1}
            min={min}
            max={max}
          />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={toggleModal2}>
        <View style={tw`flex-1 bg-white rounded-t-2xl mt-2`}>
          <StatusBar hidden={true} />
          <AppInput toggleModal={toggleModal2} />
        </View>
      </Modal>
    </>
  );
};

export default App;

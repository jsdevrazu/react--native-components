import {useState} from 'react';
import FlatListItem from './components/RenderList/FlatListItem';
import RangeSlider from './components/Slider/RangerSlider';
import {Text, TouchableOpacity, View, Modal} from 'react-native';
import tw from 'twrnc';

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
  "marshall",
  "bang & olufsen",
  "jvc",
  "skullcandy"
];

const App = () => {
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  return (
    <>
      <View style={tw`flex-1 items-center justify-center bg-gray-900`}>
        <TouchableOpacity onPress={toggleModal} style={tw`mb-6`}>
          <Text style={tw`text-white`}>Open Render List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal1}>
          <Text style={tw`text-white`}>Open Input slider</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        >
        <View style={tw`flex-1 bg-white rounded-lg`}>
          <FlatListItem toggleModal={toggleModal} data={myData} />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={toggleModal1}>
        <View style={tw`flex-1 bg-white rounded-lg`}>
          <RangeSlider
            low={low}
            setLow={setLow}
            high={high}
            setHigh={setHigh}
            max={2300}
            min={9}
            toggleModal1={toggleModal1}
          />
        </View>
      </Modal>
    </>
  );
};

export default App;

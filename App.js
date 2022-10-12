import {useState} from 'react';
import FlatListItem from './components/RenderList/FlatListItem';
import RangeSlider from './components/Slider/RangerSlider';
import {Text, TouchableOpacity, View, Modal} from 'react-native';
import tw from 'twrnc';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <View style={tw`flex-1 items-center justify-center`}>
        <TouchableOpacity onPress={toggleModal} style={tw`mb-6`}>
          <Text>Open Render List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal1}>
          <Text>Open Input slider</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
        style={tw`rounded-md`}
        >
        <View style={tw`flex-1 bg-white rounded-lg`}>
          <TouchableOpacity
            onPress={toggleModal}
            style={tw`absolute top-3 right-3`}>
            <AntDesign name="close" color="blue" size={25} />
          </TouchableOpacity>
          <FlatListItem data={myData} />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible1}
        onRequestClose={toggleModal1}>
        <View style={tw`flex-1 bg-white rounded-lg`}>
          <TouchableOpacity
            onPress={toggleModal1}
            style={tw`absolute top-3 right-3`}>
            <AntDesign name="close" color="blue" size={25} />
          </TouchableOpacity>
          <RangeSlider
            low={low}
            setLow={setLow}
            high={high}
            setHigh={setHigh}
            max={2300}
            min={9}
          />
        </View>
      </Modal>
    </>
  );
};

export default App;

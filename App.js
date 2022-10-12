import {useState} from 'react';
import FlatListItem from './components/RenderList/FlatListItem';
import RangeSlider from './components/Slider/RangerSlider';

const myData = [
  'jbl',
  'sony',
  'seenheiser',
  'philipp',
  'bose',
  'beasts By Dre',
  'fresh in Rabel',
];

const App = () => {
  const [low, setLow] = useState('');
  const [high, setHigh] = useState('');

  return (
    <>
      <FlatListItem data={myData} />
      <RangeSlider
        low={low}
        setLow={setLow}
        high={high}
        setHigh={setHigh}
        max={2300}
        min={9}
      />
    </>
  );
};

export default App;

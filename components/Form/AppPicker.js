import {useFormikContext} from 'formik';
import React, {useRef} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../config/colors';
import AppErrorMessage from './AppErrorMessage';
import RBSheet from 'react-native-raw-bottom-sheet';
import COLORS from '../../config/colors';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc'

function AppPicker({name, placeholder, items}) {
  const refRBSheet = useRef();
  const [open, setOpen] = React.useState(false);
  const {setFieldTouched, setFieldValue, values, errors, touched} =
    useFormikContext();

  const handlePress = e => {
    e.preventDefault();
    setFieldTouched(name);
    refRBSheet.current.open();
    setOpen(true);
  };

  const handleClose = (e, item) => {
    e.preventDefault();
    setFieldValue(name, item);
    refRBSheet.current.close();
    setOpen(false);
  };
  // console.log(open);
  return (
    <>
      <StatusBar
        backgroundColor={open ? '#00000050' : COLORS.background}
        style="dark-content"
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handlePress}
          style={[
            styles.input,
            touched[name] && errors[name] && {borderColor: colors?.primary},
          ]}>
          {values[name] ? (
            <Text style={styles.value}>{values[name]}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <Feather name="chevron-down" size={24} color={COLORS?.primary} />
        </TouchableOpacity>
        <AppErrorMessage visible={touched[name]} error={errors[name]} />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          animationType="fade"
          openDuration={700}
          height={400}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          customStyles={{
            wrapper: {
              backgroundColor: '#00000050',
            },
            draggableIcon: {
              backgroundColor: '#ccc',
            },
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{placeholder}</Text>
            <ScrollView>
              <View style={styles.items}>
                {items.map(item => (
                  <TouchableOpacity
                    key={item.value}
                    style={styles.item}
                    onPress={e => handleClose(e, item.value)}>
                    <View style={tw`bg-[${item.value}] w-10 h-10 rounded-full`}></View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </RBSheet>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  value: {
    color: colors?.black,
  },
  input: {
    borderColor: '#EDEDED',
    backgroundColor: COLORS?.white,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingRight: 15,
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputError: {
    borderColor: colors?.primary,
  },
  placeholder: {
    color: colors?.gray,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 8,
    color: COLORS?.primary,
    fontWeight: 'bold',
  },
  items: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: '22%',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  itemText: {
    color: colors?.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AppPicker;
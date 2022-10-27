import React, {useState} from 'react';
import {useFormikContext} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppErrorMessage from './AppErrorMessage';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import COLORS from '../../config/colors';

export default function AppFormFeilds({
  name,
  password = false,
  numberOfLines,
  Icon,
  ...otherProps
}) {
  const [showPassword, setShowPassword] = useState(password);
  const {setFieldTouched, handleChange, errors, touched, values} =
    useFormikContext();

  return (
    <View style={styles.container}>
      {Icon && (
        <View style={styles.mainIcon}>
          <Icon />
        </View>
      )}

      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        style={[
          styles.input,
          touched[name] &&
            errors[name] && {
              borderColor: COLORS?.danger,
              height: numberOfLines ? 110 : null,
              textAlignVertical: numberOfLines ? 'top' : null,
            },
        ]}
        secureTextEntry={showPassword}
        value={values[name]}
      />
      {password && (
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            ...styles.mainIcon,
          }}
          source={require('../../assets/1Password.png')}
        />
      )}

      {password && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AntDesign name="eye" size={24} color={COLORS?.primary} />
          ) : (
            <AntDesign name="eyeo" size={24} color={COLORS?.primary} />
          )}
        </TouchableOpacity>
      )}
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    borderColor: '#EDEDED',
    backgroundColor: COLORS?.white,
    borderWidth: 2,
    borderColor: COLORS?.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 6,
    paddingLeft: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  inputError: {
    borderColor: COLORS?.danger,
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 23,
  },
  mainIcon: {
    position: 'absolute',
    left: 15,
    top: 22,
    zIndex: 1000,
  },
});

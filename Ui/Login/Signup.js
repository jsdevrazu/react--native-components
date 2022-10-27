import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import {AppForm, AppFormFeilds, AppSubmitButton} from '../../components/Form';
import * as yup from 'yup';
import {LoginButton} from '../../components/shared';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import COLORS from '../../config/colors';

const validationSchema = yup
  .object({
    name: yup.string().min(2).required('Name is required'),
    email: yup
      .string()
      .email('Field should contain a valid e-mail')
      .max(255)
      .required('E-mail is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const SignUp = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`mt-0 items-center`}>
        <Text style={tw`text-2xl font-medium text-[#979797]`}>Sign Up</Text>
      </View>
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <View style={tw`items-center`}>
          {/* form */}
          <View style={tw`w-10/12 mb-3`}>
            <Text style={tw`text-sm font-medium`}>Name</Text>
            <AppFormFeilds
              name="name"
              placeholder="Full Name"
              Icon={() => (
                <Entypo name="user" size={20} color={COLORS.primary} />
              )}
            />
          </View>

          <View style={tw`w-10/12 mb-3`}>
            <Text style={tw`text-sm font-medium`}>Email</Text>
            <AppFormFeilds
              name="email"
              placeholder="Write Your Email"
              Icon={() => (
                <Foundation name="mail" size={20} color={COLORS.primary} />
              )}
            />
          </View>

          <View style={tw`w-10/12 mb-3`}>
            <Text style={tw`text-sm font-medium`}>Password</Text>
            <AppFormFeilds
              name="password"
              placeholder="*************"
              password
            />
          </View>

          <View style={tw`w-10/12`}>
            <Text style={tw`text-sm font-medium`}>Confirm Password</Text>
            <AppFormFeilds
              name="confirmPassword"
              placeholder="*************"
              password
            />
          </View>
        </View>
        <View style={tw`w-[175px] mx-auto mt-6`}>
          <AppSubmitButton title="Signup" style={tw`py-3`} />
        </View>
      </AppForm>
      {/*  */}
      <Text style={tw`self-center text-lg font-medium text-[#979797] my-2`}>
        Or
      </Text>
      <LoginButton
        onPress={() => handleGoogleLogin()}
        title="Signup with Google"
        googlePlus
      />
      <LoginButton
        onPress={() => handleFacebookLogin()}
        title="Signup with facebook"
      />
      {/* SIGN UP */}
      <View style={tw`flex-row justify-center items-center mt-4 pb-6`}>
        <Text style={tw` text-black px-2 text-sm font-medium `}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LoginScreen', {title: route?.params?.title})
          }>
          <Text style={tw`text-[#139D8A] text-sm font-medium`}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, ScrollView, TextInput, View} from 'react-native';

const OtherScreen = () => {
  const navigation = useNavigation();

  const renderInput = (key: string) => {
    return (
      <TextInput
        key={key}
        style={{
          minHeight: 40,
          borderColor: '#000000',
          borderWidth: 1,
          borderRadius: 2,
          paddingLeft: 5,
          marginBottom: 12,
        }}
        placeholder={'Input text ' + key}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={{padding: 24}}>
          {new Array(20)
            .fill(null)
            .map((_, index) => renderInput(index.toString()))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default OtherScreen;

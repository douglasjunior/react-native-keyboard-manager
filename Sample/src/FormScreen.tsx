import React, {Component} from 'react';
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

import KeyboardManager, {PreviousNextView} from 'react-native-keyboard-manager';

const INPUT_KEYS = [
  'input1',
  'input2',
  'input3',
  'input4',
  'input5',
  'input6',
  'textarea1',
  'textarea2',
  'textarea3',
  'textarea4',
];

type StateType = {
  modalVisible?: boolean;
  enableDisable?: boolean;
  inputsValues: {
    [key: string]: string;
  };
};

class FormScreen extends Component<any, StateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      modalVisible: false,
      enableDisable: true,
      inputsValues: {},
    };
  }

  componentDidMount() {
    KeyboardManager.resignFirstResponder();
  }

  componentDidUpdate() {
    KeyboardManager.isKeyboardShowing().then(isShowing => {
      console.log('isKeyboardShowing: ' + isShowing);
    });
  }

  handleEnableDisable = (value: boolean) => {
    KeyboardManager.setEnable(value);
    this.setState({
      enableDisable: value,
    });
  };

  handleShowModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleOtherScreen = () => {
    this.props.navigation.navigate('OtherScreen');
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  getRef<T>(key: string) {
    // eslint-disable-next-line react/no-string-refs
    return this.refs[key] as T;
  }

  renderInput = (ref: string, index: number) => {
    let nextRef = INPUT_KEYS[index + 1];

    const nextFocus = () => {
      if (!nextRef) {
        return;
      }
      this.getRef<TextInput>(nextRef)?.focus();
    };

    const multiline = ref.startsWith('textarea');

    return (
      <View key={ref} style={{padding: 10}}>
        <Text>{ref}</Text>

        <TextInput
          style={{
            minHeight: 40,
            borderColor: '#000000',
            borderWidth: 1,
            borderRadius: 2,
            paddingLeft: 5,
            // maxHeight is recommended for multiline, to prevent infinite grown
            maxHeight: multiline ? 300 : undefined,
          }}
          ref={ref}
          value={this.state.inputsValues[ref] || ''}
          onChangeText={text => {
            this.setState(previous => ({
              inputsValues: {
                ...previous.inputsValues,
                [ref]: text,
              },
            }));
          }}
          placeholder={ref}
          onSubmitEditing={!multiline ? nextFocus : undefined}
          multiline={multiline}
          numberOfLines={multiline ? 10 : 1}
          returnKeyType={multiline ? 'default' : 'next'}
          onLayout={() => {
            // When multiline=true and the input height changes, it updates the keyboard position.
            KeyboardManager.reloadLayoutIfNeeded();
          }}
        />
      </View>
    );
  };

  renderContent = () => {
    return (
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={{marginTop: 10, textAlign: 'center'}}>
            React-Native Keyboard Manager
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Enable/Disable </Text>
            <Switch
              onValueChange={this.handleEnableDisable}
              value={this.state.enableDisable}
            />
          </View>
        </View>

        <View>{INPUT_KEYS.map(this.renderInput)}</View>
      </ScrollView>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <Button onPress={this.handleShowModal} title="Show in modal" />
          <Button
            onPress={this.handleOtherScreen}
            title="Navigate to other screen"
          />
          {this.renderContent()}

          <Modal
            onRequestClose={this.handleCloseModal}
            visible={this.state.modalVisible}>
            <SafeAreaView style={{flex: 1, backgroundColor: '#e1e1e1'}}>
              <Button onPress={this.handleCloseModal} title="Close modal" />
              {/* Inside a native modal the inputs need to be wrapped inside PreviousNextView */}
              <PreviousNextView style={{flex: 1}}>
                {this.renderContent()}
              </PreviousNextView>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>
      </View>
    );
  }
}

export default FormScreen;

/**
* MIT License
* 
* Copyright (c) 2017 Douglas Nassif Roma Junior
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE. 
*/

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Switch,
  Modal,
} from 'react-native';

import KeyboardManager, { PreviousNextView } from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setKeyboardDistanceFromTextField(30);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setToolbarDoneBarButtonItemText("Done");
KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
KeyboardManager.setToolbarPreviousNextButtonEnable(true);
KeyboardManager.setToolbarTintColor('#FF00FF'); // Only #000000 format is supported
KeyboardManager.setToolbarBarTintColor('#FFFF00'); // Only #000000 format is supported
KeyboardManager.setShouldShowToolbarPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setKeyboardAppearance("default"); // "default" | "light" | "dark"
KeyboardManager.setShouldResignOnTouchOutside(true);
KeyboardManager.setShouldPlayInputClicks(true);

const inputStyle = { minHeight: 40, borderColor: "#000000", borderWidth: 1, borderRadius: 2, paddingLeft: 5 };

const inputKeys = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6',
  'textarea1', 'textarea2', 'textarea3', 'textarea4',];

class App extends Component {

  state = {
    enableDisable: true
  };

  componentDidMount() {
    KeyboardManager.resignFirstResponder();
  }

  componentDidUpdate() {
    KeyboardManager.isKeyboardShowing()
      .then((isShowing) => {
        console.log("isKeyboardShowing: " + isShowing);
      })
  }

  onEnableDisable = (value) => {
    KeyboardManager.setEnable(value);
    this.setState({
      enableDisable: value
    })
  }

  render() {
    const self = this;

    var inputs = [];

    for (let i = 0; i < inputKeys.length; i++) {
      let ref = inputKeys[i];
      let nextRef = i < inputKeys.length - 1 ? inputKeys[i + 1] : '';

      let nextFocus = () => { self.refs[nextRef] ? self.refs[nextRef].focus() : null };

      const multiline = ref.startsWith('textarea');
      inputs.push((
        <View key={i} style={{ padding: 10 }}>
          <Text >{ref}</Text>

          <TextInput style={inputStyle}
            ref={ref}
            value={this.state[ref]}
            onChangeText={text => {
              let state = {};
              state[ref] = text;
              self.setState(state)
            }}
            placeholder={ref}
            onSubmitEditing={!multiline ? nextFocus : undefined}
            multiline={multiline}
            numberOfLines={multiline ? 10 : 1}
            returnKeyType={multiline ? 'default' : 'next'}
            onLayout={() => {
              // When the input size (textarea) changes, it updates the keyboard position.
              KeyboardManager.reloadLayoutIfNeeded();
            }}
          />
        </View>
      ))
    }

    return (
      <View style={{ flex: 1 }}>

        {/* To try with Modal, uncomment the two following lines. */}
        {/* <Modal visible={true}> */}
        {/* <PreviousNextView style={{ flex: 1 }}> */}

        {/* ScrollView is not required, but may be needed in some cases. */}
        <ScrollView>

          <View style={{ alignItems: "center" }}>
            <Text style={{ marginTop: 50, textAlign: "center" }}>React-Native Keyboard Manager</Text>
            <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
              <Text>Enable/Disable </Text>
              <Switch onValueChange={this.onEnableDisable}
                value={this.state.enableDisable} />
            </View>
          </View>

          <View>{inputs}</View>

        </ScrollView>

        {/* </PreviousNextView> */}
        {/* </Modal> */}

      </View>
    )
  }
}

export default App;

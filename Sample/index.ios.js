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
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Switch,
} from 'react-native';

import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setToolbarPreviousNextButtonEnable(true);
KeyboardManager.setKeyboardDistanceFromTextField(10);
KeyboardManager.setPreventShowingBottomBlankSpace(true);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setToolbarDoneBarButtonItemText("Close");
KeyboardManager.setToolbarManageBehaviour(0);
KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
KeyboardManager.setShouldShowTextFieldPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setShouldResignOnTouchOutside(true);

class SampleKeyboardManager extends Component {

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

    enableDisable(value) {
        KeyboardManager.setEnable(value);
        this.setState({
            enableDisable: value
        })
    }

    render() {
        const self = this;

        var inputs = [];

        const inputStyle = { height: 40, borderColor: "#000000", borderWidth: 1, borderRadius: 2, paddingLeft: 5 };

        for (let i = 0; i < 7; i++) {
            let ref = "input" + i;
            let nextRef = "input" + (i + 1);
            let nextFocus = () => { self.refs[nextRef] ? self.refs[nextRef].focus() : null };

            inputs.push((
                <View key={i} style={{ padding: 10 }}>
                    <Text >Label {i}</Text>

                    <TextInput style={inputStyle}
                        ref={ref}
                        value={this.state[ref]}
                        onChangeText={text => {
                            let state = {};
                            state[ref] = text;
                            self.setState(state)
                        }}
                        returnKeyType="next"
                        onSubmitEditing={nextFocus}
                        blurOnSubmit={false}
                    />
                </View>
            ))
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ marginTop: 50, textAlign: "center" }}>React-Native Keyboard Manager</Text>
                    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                        <Text>Enable/Disable </Text>
                        <Switch onValueChange={this.enableDisable.bind(this)}
                            value={this.state.enableDisable} />
                    </View>
                </View>
                <View>
                    {inputs}
                </View>
            </View>
        )
    }
}


AppRegistry.registerComponent('SampleKeyboardManager', () => SampleKeyboardManager);
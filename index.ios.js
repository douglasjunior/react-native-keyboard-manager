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
    ScrollView
} from 'react-native';

import KeyboardManager from './index.js'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setKeyboardDistanceFromTextField(10);
KeyboardManager.setPreventShowingBottomBlankSpace(true);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
KeyboardManager.setShouldShowTextFieldPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setShouldResignOnTouchOutside(true);

class Demo extends Component {

    state = {};

    componentDidMount() {
        KeyboardManager.resignFirstResponder();
    }

    componentDidUpdate() {
        KeyboardManager.isKeyboardShowing()
            .then((isShowing) => {
                console.log("isKeyboardShowing: " + isShowing);
            })
    }

    render() {
        const self = this;

        var inputs = [];

        const inputStyle = { height: 40, borderColor: "#000000", borderWidth: 1, borderRadius: 2, paddingLeft: 5 };

        for (let i = 0; i < 12; i++) {
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
            <ScrollView style={{ flex: 1 }}>

                <Text style={{ marginTop: 50, textAlign: "center" }}>React-Native Keyboard Manager</Text>

                {inputs}

            </ScrollView>
        )
    }
}


AppRegistry.registerComponent('ReactNativeKeyboardManager', () => Demo);
# React-Native Keyboard Manager

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-keyboard-manager.svg)](https://www.npmjs.com/package/react-native-keyboard-manager)
[![npm downloads](https://img.shields.io/npm/dt/react-native-keyboard-manager.svg)](#install)

Library to prevent issues of keyboard sliding up and cover inputs on React-Native iOS projects ⚛. Thanks to awesome [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) ❤️.

This is only for iOS, Android no needed. For Android just add `android:windowSoftInputMode="adjustResize"` to your activity.

## Screenshots

| Enabled | Disabled |
| - | - |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-keyboard-manager/master/screenshots/01.png' width='240' /> <img src='https://raw.githubusercontent.com/douglasjunior/react-native-keyboard-manager/master/screenshots/02.png' width='240' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-keyboard-manager/master/screenshots/03.png' width='240' /> |

| <img src='https://raw.githubusercontent.com/hackiftekhar/IQKeyboardManager/v3.3.0/Screenshot/IQKeyboardManager.gif' width='240' /> |
| - |
| _Credits: IQKeyboardManager_ |

## NOTES:

- for RN 0.60.0 or later use `react-native-keyboard-manager@latest`
- for RN 0.53.0 ... 0.59.10, use `react-native-keyboard-manager@4.0.13-12`
- for RN 0.47.0 ... 0.52.2, use `react-native-keyboard-manager@4.0.13-5`
- for RN 0.40.0 ... 0.46.4, use `react-native-keyboard-manager@4.0.13-1`

## Install

```bash
yarn add react-native-keyboard-manager
```
Or
```bash
npm i -S react-native-keyboard-manager
```

## Auto linking

If you are using `React Native 0.60.+` go to the folder **your-project/ios** and run `pod install`, and you're done. 

If not, use one of the following methods to link.

## Link with `react-native link`:

React native link is no longer supported due to cocoapods dependency.

## Link with cocoapods:

1. Add this line to your Podfile
    ```bash
    pod 'ReactNativeKeyboardManager', :path => '../node_modules/react-native-keyboard-manager'
    ```
    
2. run
    ```bash
    pod install
    ```

## Post install

Because [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) is written in `Swift`, you need to enable `Swift` on your native Xcode project.

1. Open `ios/YourAppName.xcworkspace` in Xcode
1. Right-click on `YourAppName` in the `Project Navigator` on the left, and click `New File`.
1. Create a single empty `Swift` file to the project (make sure that `YourAppName` target is selected when adding)
1. When Xcode asks, press **Create Bridging Header** and do not remove `Swift` file then. 
1. Re-run your build.

## Use

It does not need any extra library setup to work, just [install](#install) and go.

But, if you need some configuration, there are some options available.

```js
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setEnableAutoToolbar(true);
    KeyboardManager.setToolbarDoneBarButtonItemText("Done");
    KeyboardManager.setToolbarManageBehaviourBy("subviews"); // "subviews" | "tag" | "position"
    KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    KeyboardManager.setToolbarTintColor('#0000FF'); // Only #000000 format is supported
    KeyboardManager.setToolbarBarTintColor('#FFFFFF'); // Only #000000 format is supported
    KeyboardManager.setShouldShowToolbarPlaceholder(true);
    KeyboardManager.setOverrideKeyboardAppearance(false);
    KeyboardManager.setKeyboardAppearance("default"); // "default" | "light" | "dark"
    KeyboardManager.setShouldResignOnTouchOutside(true);
    KeyboardManager.setShouldPlayInputClicks(true);
    KeyboardManager.resignFirstResponder();
    KeyboardManager.isKeyboardShowing()
      .then((isShowing) => {
          // ...
      });
}
```

### Enable Next/Previous buttons

If you want to use Next/Previous buttons, enable it.

> If you linked using `react-native link`, make sure you [linked the resource file](#link-with-react-native-link).

```js
if (Platform.OS === 'ios') {
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}
```

And if you want to use Next/Previous buttons inside a `Modal`, you need to wrap the fields in a `PreviousNextView`.

```jsx
class App extends Component {
  render() {
      return (
          <View {...} >
              // others views
              <Modal {...} >
                  // others views
                  <PreviousNextView style={...} >
                      // all TextInput
                  </PreviousNextView>
              </Modal>
          </View>
      );
  }
}
```

For more details, see the [Sample Project](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/Sample/App.js) and the official [IQKeyboardManager documentation](https://github.com/hackiftekhar/IQKeyboardManager/tree/v6.5.4).

## Contribute

New features, bug fixes and improvements are welcome! For questions and suggestions use the [issues](https://github.com/douglasjunior/react-native-keyboard-manager/issues).

<a href="https://www.patreon.com/douglasjunior"><img src="http://i.imgur.com/xEO164Z.png" alt="Become a Patron!" width="200" /></a>
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E32BUP77SVBA2)

## Licence

```
The MIT License (MIT)

Copyright (c) 2017 Douglas Nassif Roma Junior
```

See the full [licence file](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/LICENSE).

## IQKeyboardManager License

```
The MIT License (MIT)

Copyright (c) 2013-16 Iftekhar Qurashi
```

See the full [IQKeyboardManager licence file](https://github.com/hackiftekhar/IQKeyboardManager/blob/master/LICENSE.md).

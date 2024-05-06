# React-Native Keyboard Manager

[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/LICENSE)
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

- for RN 0.72.0 or later use `react-native-keyboard-manager@latest`
- for RN 0.60.0 ... 0.71.X, use `react-native-keyboard-manager@6.5.11-2`
- for RN 0.53.0 ... 0.59.10, use `react-native-keyboard-manager@4.0.13-12`
- for RN 0.47.0 ... 0.52.2, use `react-native-keyboard-manager@4.0.13-5`
- for RN 0.40.0 ... 0.46.4, use `react-native-keyboard-manager@4.0.13-1`

## Install

1. Install the JavaScript dependency:

```sh
yarn add react-native-keyboard-manager
```
Or
```sh
npm i -S react-native-keyboard-manager
```

2. Add the CocoaPods dependency to your `ios/Podfile`:

```ruby
    # Add temporary IQKeyboardManagerSwift fork to solve problems with PrivacyInfo.xcprivacy
    pod 'IQKeyboardManagerSwift', :git => 'https://github.com/douglasjunior/IQKeyboardManager.git', :branch => 'react-native-keyboard-manager'
```

3. Run the CocoaPods installation:

```sh
cd ios
pod install
```

## Post install

Because [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) is written in `Swift`, you need to enable `Swift` on your native Xcode project.

1. Open `ios/YourAppName.xcworkspace` in Xcode
1. Right-click on `YourAppName` in the `Project Navigator` on the left, and click `New File`.
1. Create a single empty `Swift` file to the project (make sure that `YourAppName` target is selected when adding)
1. When Xcode asks, press **Create Bridging Header** and do not remove `Swift` file then. 
1. Re-run your build.

## Usage

It does not need any extra library setup to work, just [install](#install) and go.

But, if you need some configuration, there are some options available.

```js
import { Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setLayoutIfNeededOnUpdate(true);
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

For more details, see the [Sample Project](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/Sample/App.tsx) and the official [IQKeyboardManager documentation](https://github.com/hackiftekhar/IQKeyboardManager/tree/v6.5.4).

### Enable Next/Previous buttons

If you want to use Next/Previous buttons, enable it.

```js
if (Platform.OS === 'ios') {
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
}
```

And if you want to use Next/Previous buttons inside a `Modal`, you need to wrap the fields in a `PreviousNextView`.

```jsx
import { PreviousNextView } from 'react-native-keyboard-manager';

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

# Mock with jest

```js
jest.mock('react-native-keyboard-manager', () => require('react-native-keyboard-manager/jest/mock'));
```

# Known issues

- If your project is managed by Expo, you will need to eject.
- Pod install failed on M1 machines: https://github.com/douglasjunior/react-native-keyboard-manager/issues/104
- ~~Problem with "@react-navigation/native-stack" and "IQKeyboardManager" on iOS: https://github.com/douglasjunior/react-native-keyboard-manager/issues/89~~
    - Seems to be fixed in version `6.5.16-0`

## Contribute

New features, bug fixes and improvements are welcome! For questions and suggestions use the [issues](https://github.com/douglasjunior/react-native-keyboard-manager/issues).

<a href="https://www.patreon.com/douglasjunior"><img src="http://i.imgur.com/xEO164Z.png" alt="Become a Patron!" width="200" /></a>
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/douglasnassif)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=douglasjunior/react-native-keyboard-manager&type=Date)](https://star-history.com/#douglasjunior/react-native-keyboard-manager&Date)

## License

```
The MIT License (MIT)

Copyright (c) 2017 Douglas Nassif Roma Junior
```

See the full [license file](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/LICENSE).

## IQKeyboardManager License

```
The MIT License (MIT)

Copyright (c) 2013-16 Iftekhar Qurashi
```

See the full [IQKeyboardManager license file](https://github.com/hackiftekhar/IQKeyboardManager/blob/master/LICENSE.md).

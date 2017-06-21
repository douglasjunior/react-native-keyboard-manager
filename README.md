# React-Native Keyboard Manager

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/douglasjunior/react-native-keyboard-manager/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-keyboard-manager.svg)](https://www.npmjs.com/package/react-native-keyboard-manager)
[![npm downloads](https://img.shields.io/npm/dt/react-native-keyboard-manager.svg)](#install)

Library that allows to prevent issues of keyboard sliding up and cover on React-Native iOS projects. ⚛

Thanks to awesome [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) ❤️

## Demo

Soon...

## Requirements

- React Native >= 0.40.0
- iOS >= 8.0

## Use

It does not need any library setup to work, just [install](#install) and go.

But, if you need some configuration, there are some options available.

```javascript
import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);
KeyboardManager.setEnableDebugging(true);
KeyboardManager.setKeyboardDistanceFromTextField(10);
KeyboardManager.setPreventShowingBottomBlankSpace(true);
KeyboardManager.setEnableAutoToolbar(true);
KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
KeyboardManager.setShouldShowTextFieldPlaceholder(true);
KeyboardManager.setOverrideKeyboardAppearance(false);
KeyboardManager.setShouldResignOnTouchOutside(true);
KeyboardManager.resignFirstResponder();
KeyboardManager.isKeyboardShowing()
  .then((isShowing) => {
      // ...
  });
```

For more details, see the official [IQKeyboardManager documentation](https://github.com/hackiftekhar/IQKeyboardManager/blob/master/PROPERTIES%20%26%20FUNCTIONS.md).

## Install 

1. Install dependency package
```bash
  npm i -S react-native-keyboard-manager
```

2. Link the native project
```bash
  react-native link react-native-keyboard-manager
```

## Contribute

New features, bug fixes and improvements are welcome! For questions and suggestions use the [issues](https://github.com/douglasjunior/react-native-keyboard-manager/issues).

## Known Issues

You can find known issues list [here](https://github.com/hackiftekhar/IQKeyboardManager/blob/master/KNOWN%20ISSUES.md).

## Donate

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZJ6TCL3EVUDDL)

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

See the full [licence file](https://github.com/hackiftekhar/IQKeyboardManager/blob/master/LICENSE.md).
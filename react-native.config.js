const path = require('path');

module.exports = {
    dependency: {
        platforms: {
            ios: { podspecPath: path.join(__dirname, 'ReactNativeKeyboardManager.podspec') },
            android: null
        },
    },
};

Object.defineProperty(exports, "__esModule", { value: true });

const { View } = require('react-native');

const KeyboardManager = {
  setEnable: jest.fn().mockResolvedValue(),
  setEnableDebugging: jest.fn().mockResolvedValue(),
  setLayoutIfNeededOnUpdate: jest.fn().mockResolvedValue(),
  setKeyboardDistanceFromTextField: jest.fn().mockResolvedValue(),
  setEnableAutoToolbar: jest.fn().mockResolvedValue(),
  setToolbarDoneBarButtonItemText: jest.fn().mockResolvedValue(),
  setToolbarManageBehaviourBy: jest.fn().mockResolvedValue(),
  setToolbarPreviousNextButtonEnable: jest.fn().mockResolvedValue(),
  setToolbarTintColor: jest.fn().mockResolvedValue(),
  setToolbarBarTintColor: jest.fn().mockResolvedValue(),
  setShouldShowToolbarPlaceholder: jest.fn().mockResolvedValue(),
  setOverrideKeyboardAppearance: jest.fn().mockResolvedValue(),
  setKeyboardAppearance: jest.fn().mockResolvedValue(),
  setShouldResignOnTouchOutside: jest.fn().mockResolvedValue(),
  setShouldPlayInputClicks: jest.fn().mockResolvedValue(),
  setShouldToolbarUsesTextFieldTintColor: jest.fn().mockResolvedValue(),
  resignFirstResponder: jest.fn().mockResolvedValue(),
  reloadLayoutIfNeeded: jest.fn().mockResolvedValue(),
  isKeyboardShowing: jest.fn().mockResolvedValue(false),
};

exports.PreviousNextView = View;
exports.KeyboardManager = KeyboardManager;
exports.default = exports.KeyboardManager;

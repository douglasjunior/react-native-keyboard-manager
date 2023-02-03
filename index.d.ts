import type { View } from "react-native";

declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export class PreviousNextView extends View { }

  namespace KeyboardManager {
    function setEnable(enable: boolean): Promise<void>;
    function setEnableDebugging(enable: boolean): Promise<void>;
    function setLayoutIfNeededOnUpdate(enable: boolean): Promise<void>;
    function setKeyboardDistanceFromTextField(distance: number): Promise<void>;
    function setEnableAutoToolbar(enable: boolean): Promise<void>;
    function setToolbarDoneBarButtonItemText(text: string): Promise<void>;
    function setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): Promise<void>;
    function setToolbarPreviousNextButtonEnable(enable: boolean): Promise<void>;
    function setToolbarTintColor(hexColor: string): Promise<void>;
    function setToolbarBarTintColor(hexColor: string): Promise<void>;
    function setShouldShowToolbarPlaceholder(enable: boolean): Promise<void>;
    function setOverrideKeyboardAppearance(enable: boolean): Promise<void>;
    function setKeyboardAppearance(appearance: KeyboardAppearance): Promise<void>;
    function setShouldResignOnTouchOutside(enable: boolean): Promise<void>;
    function setShouldPlayInputClicks(enable: boolean): Promise<void>;
    function setShouldToolbarUsesTextFieldTintColor(enable: boolean): Promise<void>;
    function resignFirstResponder(): Promise<void>;
    function reloadLayoutIfNeeded(): Promise<void>;
    function isKeyboardShowing(): Promise<boolean>;
  }

  export default KeyboardManager;
}

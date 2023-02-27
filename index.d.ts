import type { View } from "react-native";

declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export class PreviousNextView extends View { }

  namespace KeyboardManager {
    function setEnable(enable: boolean): void;
    function setEnableDebugging(enable: boolean): void;
    function setLayoutIfNeededOnUpdate(enable: boolean): void;
    function setKeyboardDistanceFromTextField(distance: number): void;
    function setEnableAutoToolbar(enable: boolean): void;
    function setToolbarDoneBarButtonItemText(text: string): void;
    function setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): void;
    function setToolbarPreviousNextButtonEnable(enable: boolean): void;
    function setToolbarTintColor(hexColor: string): void;
    function setToolbarBarTintColor(hexColor: string): void;
    function setShouldShowToolbarPlaceholder(enable: boolean): void;
    function setOverrideKeyboardAppearance(enable: boolean): void;
    function setKeyboardAppearance(appearance: KeyboardAppearance): void;
    function setShouldResignOnTouchOutside(enable: boolean): void;
    function setShouldPlayInputClicks(enable: boolean): void;
    function setShouldToolbarUsesTextFieldTintColor(enable: boolean): void;
    function resignFirstResponder(): void;
    function reloadLayoutIfNeeded(): void;
    function isKeyboardShowing(): Promise<boolean>;
  }

  export default KeyboardManager;
}

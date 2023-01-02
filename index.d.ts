import type { View } from "react-native";

declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export const PreviousNextView = {} as View;

  type KeyboardManager = {
    setEnable(enable: boolean): Promise<void>;
    setEnableDebugging(enable: boolean): Promise<void>;
    setLayoutIfNeededOnUpdate(enable: boolean): Promise<void>;
    setKeyboardDistanceFromTextField(distance: number): Promise<void>;
    setEnableAutoToolbar(enable: boolean): Promise<void>;
    setToolbarDoneBarButtonItemText(text: string): Promise<void>;
    setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): Promise<void>;
    setToolbarPreviousNextButtonEnable(enable: boolean): Promise<void>;
    setToolbarTintColor(hexColor: string): Promise<void>;
    setToolbarBarTintColor(hexColor: string): Promise<void>;
    setShouldShowToolbarPlaceholder(enable: boolean): Promise<void>;
    setOverrideKeyboardAppearance(enable: boolean): Promise<void>;
    setKeyboardAppearance(appearance: KeyboardAppearance): Promise<void>;
    setShouldResignOnTouchOutside(enable: boolean): Promise<void>;
    setShouldPlayInputClicks(enable: boolean): Promise<void>;
    setShouldToolbarUsesTextFieldTintColor(enable: boolean): Promise<void>;
    resignFirstResponder(): Promise<void>;
    reloadLayoutIfNeeded(): Promise<void>;
    isKeyboardShowing(): Promise<boolean>;
  }

  export default {} as KeyboardManager;
}

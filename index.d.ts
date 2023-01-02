import type { View } from "react-native";

declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export class PreviousNextView extends View { }

  namespace KeyboardManager {
    export function setEnable(enable: boolean): Promise<void>;
    export function setEnableDebugging(enable: boolean): Promise<void>;
    export function setLayoutIfNeededOnUpdate(enable: boolean): Promise<void>;
    export function setKeyboardDistanceFromTextField(distance: number): Promise<void>;
    export function setEnableAutoToolbar(enable: boolean): Promise<void>;
    export function setToolbarDoneBarButtonItemText(text: string): Promise<void>;
    export function setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): Promise<void>;
    export function setToolbarPreviousNextButtonEnable(enable: boolean): Promise<void>;
    export function setToolbarTintColor(hexColor: string): Promise<void>;
    export function setToolbarBarTintColor(hexColor: string): Promise<void>;
    export function setShouldShowToolbarPlaceholder(enable: boolean): Promise<void>;
    export function setOverrideKeyboardAppearance(enable: boolean): Promise<void>;
    export function setKeyboardAppearance(appearance: KeyboardAppearance): Promise<void>;
    export function setShouldResignOnTouchOutside(enable: boolean): Promise<void>;
    export function setShouldPlayInputClicks(enable: boolean): Promise<void>;
    export function setShouldToolbarUsesTextFieldTintColor(enable: boolean): Promise<void>;
    export function resignFirstResponder(): Promise<void>;
    export function reloadLayoutIfNeeded(): Promise<void>;
    export function isKeyboardShowing(): Promise<boolean>;
  }

  export default KeyboardManager;
}

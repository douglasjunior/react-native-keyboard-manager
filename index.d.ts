declare module 'react-native-keyboard-manager' {
  export type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
  export type KeyboardAppearance = 'default' | 'light' | 'dark';

  export function setEnable(enable: boolean);
  export function setEnableDebugging(enable: boolean);
  export function setKeyboardDistanceFromTextField(distance: number);
  export function setEnableAutoToolbar(enable: boolean);
  export function setToolbarDoneBarButtonItemText(text: string);
  export function setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour);
  export function setToolbarPreviousNextButtonEnable(enable: boolean);
  export function setShouldShowToolbarPlaceholder(enable: boolean);
  export function setOverrideKeyboardAppearance(enable: boolean);
  export function setKeyboardAppearance(appearance: KeyboardAppearance);
  export function setShouldResignOnTouchOutside(enable: boolean);
  export function setShouldPlayInputClicks(enable: boolean);
  export function resignFirstResponder();
  export function isKeyboardShowing(): Promise<boolean>;
}

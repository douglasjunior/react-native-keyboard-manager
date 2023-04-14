/**
 * MIT License
 *
 * Copyright (c) 2017 Douglas Nassif Roma Junior
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { ComponentType } from 'react';
import { View, ViewProps } from 'react-native';
export declare type ToolbarBehaviour = 'subviews' | 'tag' | 'position';
export declare type KeyboardAppearance = 'default' | 'light' | 'dark';
declare type KeyboardManagerType = {
    setEnable(enable: boolean): void;
    setEnableDebugging(enable: boolean): void;
    setLayoutIfNeededOnUpdate(enable: boolean): void;
    setKeyboardDistanceFromTextField(distance: number): void;
    setEnableAutoToolbar(enable: boolean): void;
    setToolbarDoneBarButtonItemText(text: string): void;
    setToolbarManageBehaviourBy(behaviour: ToolbarBehaviour): void;
    setToolbarPreviousNextButtonEnable(enable: boolean): void;
    setToolbarTintColor(hexColor: string): void;
    setToolbarBarTintColor(hexColor: string): void;
    setShouldShowToolbarPlaceholder(enable: boolean): void;
    setOverrideKeyboardAppearance(enable: boolean): void;
    setKeyboardAppearance(appearance: KeyboardAppearance): void;
    setShouldResignOnTouchOutside(enable: boolean): void;
    setShouldPlayInputClicks(enable: boolean): void;
    setShouldToolbarUsesTextFieldTintColor(enable: boolean): void;
    resignFirstResponder(): void;
    reloadLayoutIfNeeded(): void;
    isKeyboardShowing(): Promise<boolean>;
};
export declare const PreviousNextView: ComponentType<ViewProps> | typeof View;
export declare const KeyboardManager: KeyboardManagerType;
export default KeyboardManager;

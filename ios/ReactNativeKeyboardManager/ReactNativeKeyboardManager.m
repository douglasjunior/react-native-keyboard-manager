//
//  ReactNativeKeyboardManager.m
//  ReactNativeKeyboardManager
//
//  Created by Douglas Nassif Roma Junior on 21/06/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "ReactNativeKeyboardManager.h"
#import "IQKeyboardManager.h"
#import <React/RCTLog.h>

@implementation ReactNativeKeyboardManager

RCT_EXPORT_MODULE(ReactNativeKeyboardManager);

RCT_EXPORT_METHOD(setEnableDebugging: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setEnableDebugging: %d", enabled);
  [[IQKeyboardManager sharedManager] setEnableDebugging:enabled];
}

// UIKeyboard handling

RCT_EXPORT_METHOD(setEnable: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setEnable: %d", enabled);
  [[IQKeyboardManager sharedManager] setEnable:enabled];
}

RCT_EXPORT_METHOD(setKeyboardDistanceFromTextField: (CGFloat) distance) {
  RCTLogInfo(@"KeyboardManager.setKeyboardDistanceFromTextField: %f", distance);
  [[IQKeyboardManager sharedManager] setKeyboardDistanceFromTextField:distance];
}

// UIToolbar handling

RCT_EXPORT_METHOD(setPreventShowingBottomBlankSpace: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setPreventShowingBottomBlankSpace: %d", enabled);
  [[IQKeyboardManager sharedManager] setPreventShowingBottomBlankSpace:enabled];
}

RCT_EXPORT_METHOD(setEnableAutoToolbar: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setEnableAutoToolbar: %d", enabled);
  [[IQKeyboardManager sharedManager] setEnableAutoToolbar:enabled];
}

RCT_EXPORT_METHOD(setShouldToolbarUsesTextFieldTintColor: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setShouldToolbarUsesTextFieldTintColor: %d", enabled);
  [[IQKeyboardManager sharedManager] setShouldToolbarUsesTextFieldTintColor:enabled];
}

RCT_EXPORT_METHOD(setShouldShowTextFieldPlaceholder: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setShouldShowTextFieldPlaceholder: %d", enabled);
  [[IQKeyboardManager sharedManager] setShouldShowTextFieldPlaceholder:enabled];
}

// UIKeyboard Apparence overriding

RCT_EXPORT_METHOD(setOverrideKeyboardAppearance: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setOverrideKeyboardAppearance: %d", enabled);
  [[IQKeyboardManager sharedManager] setOverrideKeyboardAppearance:enabled];
}

// UITextField/UITextView Resign handling

RCT_EXPORT_METHOD(setShouldResignOnTouchOutside: (BOOL) enabled) {
  RCTLogInfo(@"KeyboardManager.setShouldResignOnTouchOutside: %d", enabled);
  [[IQKeyboardManager sharedManager] setShouldResignOnTouchOutside:enabled];
}

RCT_EXPORT_METHOD(resignFirstResponder) {
  RCTLogInfo(@"KeyboardManager.resignFirstResponder");
  [[IQKeyboardManager sharedManager] resignFirstResponder];
}

// UIAnimation handling

RCT_EXPORT_METHOD(isKeyboardShowing: (RCTPromiseResolveBlock) resolve rejecter: (RCTPromiseRejectBlock) reject) {
  BOOL isKeyboardShowing = [IQKeyboardManager sharedManager].isKeyboardShowing;
  RCTLogInfo(@"KeyboardManager.isKeyboardShowing: %d", isKeyboardShowing);
  resolve([NSString stringWithFormat:@"%d", isKeyboardShowing]);
}

@end



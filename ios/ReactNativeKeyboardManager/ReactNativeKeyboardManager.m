// MIT License
//
// Copyright (c) 2017 Douglas Nassif Roma Junior
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

@import IQKeyboardManagerSwift;

#import <objc/runtime.h>
#import <objc/message.h>

#import "ReactNativeKeyboardManager.h"
#import <React/RCTLog.h>
#import <React/RCTRootView.h>

#import <React/RCTBaseTextInputView.h>

@implementation RCTConvert(IQAutoToolbarManageBehaviour)

RCT_ENUM_CONVERTER(
                   IQAutoToolbarManageBehaviour,
                   (@{
                       @"subviews": @(IQAutoToolbarManageBehaviourBySubviews),
                       @"tag": @(IQAutoToolbarManageBehaviourByTag),
                       @"position": @(IQAutoToolbarManageBehaviourByPosition),
                    }),
                   IQAutoToolbarManageBehaviourBySubviews,
                   integerValue
                   );

@end

@implementation ReactNativeKeyboardManager

- (instancetype)init
{
    self = [super init];
    if (self) {
        Swizzle([RCTBaseTextInputView class], @selector(setDefaultInputAccessoryView_backup), @selector(setDefaultInputAccessoryView));
        Swizzle([RCTBaseTextInputView class], @selector(setDefaultInputAccessoryView), @selector(setDefaultInputAccessoryView_avoid));

        // set LayoutIfNeededOnUpdate to YES to prevent problems with SateArea
        // https://github.com/hackiftekhar/IQKeyboardManager/issues/1687#issuecomment-721618667
        [[IQKeyboardManager shared] setLayoutIfNeededOnUpdate:YES];
    }
    return self;
}

void Swizzle(Class c, SEL orig, SEL new)
{
    Method origMethod = class_getInstanceMethod(c, orig);
    Method newMethod = class_getInstanceMethod(c, new);
    if(class_addMethod(c, orig, method_getImplementation(newMethod), method_getTypeEncoding(newMethod)))
        class_replaceMethod(c, new, method_getImplementation(origMethod), method_getTypeEncoding(origMethod));
    else
        method_exchangeImplementations(origMethod, newMethod);
}

- (UIColor *)colorFromHexString:(NSString *)hexString {
    unsigned rgbValue = 0;
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    [scanner setScanLocation:1]; // bypass '#' character
    [scanner scanHexInt:&rgbValue];
    return [UIColor colorWithRed:((rgbValue & 0xFF0000) >> 16)/255.0 green:((rgbValue & 0xFF00) >> 8)/255.0 blue:(rgbValue & 0xFF)/255.0 alpha:1.0];
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

BOOL debugging = NO;

RCT_EXPORT_MODULE(ReactNativeKeyboardManager);

RCT_EXPORT_METHOD(setEnableDebugging: (BOOL) enabled) {
    debugging = enabled;
    if (debugging) RCTLogInfo(@"KeyboardManager.setEnableDebugging: %d", enabled);
    [[IQKeyboardManager shared] setEnableDebugging:enabled];
}

// UIKeyboard handling

RCT_EXPORT_METHOD(setEnable: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setEnable: %d", enabled);
    [[IQKeyboardManager shared] setEnable:enabled];
}

RCT_EXPORT_METHOD(setKeyboardDistanceFromTextField: (CGFloat) distance) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setKeyboardDistanceFromTextField: %f", distance);
    [[IQKeyboardManager shared] setKeyboardDistanceFromTextField:distance];
}

RCT_EXPORT_METHOD(setLayoutIfNeededOnUpdate: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setLayoutIfNeededOnUpdate: %d", enabled);
    [[IQKeyboardManager shared] setLayoutIfNeededOnUpdate:enabled];
}

// UIToolbar handling

RCT_EXPORT_METHOD(setToolbarPreviousNextButtonEnable: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setToolbarPreviousNextButtonEnable: %d", enabled);
    if (enabled) {
        NSMutableArray *newArray = [[IQKeyboardManager shared].toolbarPreviousNextAllowedClasses mutableCopy];
        [newArray addObject:[RCTRootView class]];
        [IQKeyboardManager shared].toolbarPreviousNextAllowedClasses = newArray;
    } else {
        NSMutableArray *newArray = [[IQKeyboardManager shared].toolbarPreviousNextAllowedClasses mutableCopy];
        [newArray removeObject:[RCTRootView class]];
        [IQKeyboardManager shared].toolbarPreviousNextAllowedClasses = newArray;
    }
}

RCT_EXPORT_METHOD(setEnableAutoToolbar: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setEnableAutoToolbar: %d", enabled);
    [[IQKeyboardManager shared] setEnableAutoToolbar:enabled];
}

RCT_EXPORT_METHOD(setShouldToolbarUsesTextFieldTintColor: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setShouldToolbarUsesTextFieldTintColor: %d", enabled);
    [[IQKeyboardManager shared] setShouldToolbarUsesTextFieldTintColor:enabled];
}

RCT_EXPORT_METHOD(setToolbarTintColor: (NSString*) hexString) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setToolbarTintColor: %@", hexString);
    UIColor* toolbarTintColor = [self colorFromHexString:hexString];
    [[IQKeyboardManager shared] setToolbarTintColor: toolbarTintColor];
}

RCT_EXPORT_METHOD(setToolbarBarTintColor: (NSString*) hexString) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setToolbarBarTintColor: %@", hexString);
    UIColor* toolbarBarTintColor = [self colorFromHexString:hexString];
    [[IQKeyboardManager shared] setToolbarBarTintColor: toolbarBarTintColor];
}

RCT_EXPORT_METHOD(setShouldShowToolbarPlaceholder: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setShouldShowToolbarPlaceholder: %d", enabled);
    [[IQKeyboardManager shared] setShouldShowToolbarPlaceholder:enabled];
}

RCT_EXPORT_METHOD(setToolbarDoneBarButtonItemText: (NSString *) text) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setToolbarDoneBarButtonItemText: %@", text);
    [[IQKeyboardManager shared] setToolbarDoneBarButtonItemText:text];
}

RCT_EXPORT_METHOD(setToolbarManageBehaviourBy: (IQAutoToolbarManageBehaviour) behaviour) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setToolbarManageBehaviour: %ld", behaviour);
    [[IQKeyboardManager shared] setToolbarManageBehaviour:behaviour];
}

RCT_EXPORT_METHOD(setShouldPlayInputClicks: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setShouldPlayInputClicks: %d", enabled);
    [[IQKeyboardManager shared] setShouldPlayInputClicks:enabled];
}

// UIKeyboard Apparence overriding
// https://github.com/facebook/react-native/blob/v0.60.0/React/Base/RCTConvert.m#L398

RCT_EXPORT_METHOD(setOverrideKeyboardAppearance: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setOverrideKeyboardAppearance: %d", enabled);
    [[IQKeyboardManager shared] setOverrideKeyboardAppearance:enabled];
}

RCT_EXPORT_METHOD(setKeyboardAppearance: (UIKeyboardAppearance) appearance) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setKeyboardAppearance: %ld", appearance);
    [[IQKeyboardManager shared] setKeyboardAppearance:appearance];
}

// UITextField/UITextView Resign handling

RCT_EXPORT_METHOD(setShouldResignOnTouchOutside: (BOOL) enabled) {
    if (debugging) RCTLogInfo(@"KeyboardManager.setShouldResignOnTouchOutside: %d", enabled);
    [[IQKeyboardManager shared] setShouldResignOnTouchOutside:enabled];
}

RCT_EXPORT_METHOD(resignFirstResponder) {
    if (debugging) RCTLogInfo(@"KeyboardManager.resignFirstResponder");
    [[IQKeyboardManager shared] resignFirstResponder];
}

RCT_EXPORT_METHOD(reloadLayoutIfNeeded) {
    if (debugging) RCTLogInfo(@"KeyboardManager.reloadLayoutIfNeeded");
    [[IQKeyboardManager shared] reloadLayoutIfNeeded];
}

// UIAnimation handling

RCT_EXPORT_METHOD(isKeyboardShowing: (RCTPromiseResolveBlock) resolve rejecter: (RCTPromiseRejectBlock) reject) {
    BOOL isKeyboardShowing = [IQKeyboardManager shared].keyboardShowing;
    if (debugging) RCTLogInfo(@"KeyboardManager.isKeyboardShowing: %d", isKeyboardShowing);
    resolve(@(isKeyboardShowing));
}

@end

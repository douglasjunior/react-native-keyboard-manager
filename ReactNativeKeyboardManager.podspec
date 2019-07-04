require 'json'

packageJson = JSON.parse(File.read('package.json'))
version = packageJson["version"]
description = packageJson["description"]
homepage = packageJson["homepage"]
license = packageJson["license"]
author = packageJson["author"]
repository = packageJson["repository"]["url"]
iqVersion = version.split('-').first

Pod::Spec.new do |s|
	s.name           = "ReactNativeKeyboardManager"
	s.version        = version
	s.description    = description
	s.homepage       = homepage
	s.summary        = "A <ReactNativeKeyboardManager /> component for react-native"
	s.license        = license
	s.authors        = author
	s.source         = { :git => repository, :tag => version }
	s.platform       = :ios, "9.0"
	s.preserve_paths = 'README.md', 'package.json', '*.js'
	s.source_files   = 'ios/ReactNativeKeyboardManager/**/*.{h,m}'

	s.dependency 'React'
	s.dependency 'React-RCTText'
	s.dependency 'IQKeyboardManager', iqVersion
end

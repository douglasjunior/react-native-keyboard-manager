require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|
	s.name                = "RNKeyboardManager"
	s.version         = version
	s.description         = <<-DESC
	This library allows to prevent issues of keyboard sliding up and cover on React-Native iOS projects
	DESC
	s.homepage            = "https://github.com/douglasjunior/react-native-keyboard-manager"
	s.summary         = "A <ReactNativeKeyboardManager /> component for react-native"
	s.license         = "MIT"
	s.authors             = "Douglas Nassif Roma Junior"
	s.source              = { :git => "https://github.com/douglasjunior/react-native-keyboard-manager.git", :tag => "v#{s.version}" }
	s.platform            = :ios, "8.0"
	s.preserve_paths      = 'README.md', 'package.json', '*.js'
	s.source_files        = 'ios/ReactNativeKeyboardManager/**/*.{h,m}'
	s.dependency          'React'
	s.dependency          'IQKeyboardManager'
end
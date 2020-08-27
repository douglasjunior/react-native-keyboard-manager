require 'json'

packageJson = JSON.parse(File.read('package.json'))
version = packageJson["version"]
repository = packageJson["repository"]["url"]
iqVersion = version.split('-').first

Pod::Spec.new do |s|
	s.name           = "ReactNativeKeyboardManager"
	s.version        = version
	s.description    = packageJson["description"]
	s.homepage       = packageJson["homepage"]
	s.summary        = packageJson["description"]
	s.license        = packageJson["license"]
	s.authors        = packageJson["author"]
	s.source         = { :git => repository, :tag => version }
	s.platform       = :ios, "9.0"
	s.preserve_paths = 'README.md', 'package.json', '*.js'
	s.source_files   = 'ios/ReactNativeKeyboardManager/**/*.{h,m}'

	s.dependency 'React'
	s.dependency 'React-RCTText'
	s.dependency 'IQKeyboardManagerSwift', iqVersion
end

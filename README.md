
# Steps for installation
1. yarn
2. yarn android

# ReactJS Concepts
1. Class Components
2. Functional Components
3. State
4. Props
5. Lifecycle for class components
6. Lifecycle for functional components
7. Conditional Rendering
8. What are hooks ?
9. useState hook
10. useEffect hook

# ReactNative Components
1. **View** (exactly what div does, the only difference is you cannot add text inside it, it needs to be wrapped in Text Component)
2. **Text** (exactly what p tag does, additionally it supports props like onPress, allowFontScale, etc...)
3. **TouchableOpacity** (if you want to make any area clickable you wrap with TouchableOpacity, it brings down the opacity of that area)
4. **FlatList** (you can optimise your list using this.)
5. **Image** (it helps to show the image either remote or local)

# Styling with React Native
There are two ways in which styling works
1. Using StyleSheet
2. Without using StyleSheet (also acts as inline styling),

**I. Using StyleSheet**
	a. We need to import StyleSheet from react-native library
	b. For creating styles we need to use create method from StyleSheet
	Syntax: const styles = StyleSheet.create({})

**II Inline StyleSheet**
	a. We are allowed to write object inside the style prop for each valid component
	Syntax: <View style={{ borderWidth: 1 }}>

***UI Framework:***
1. React Native Paper - https://callstack.github.io/react-native-paper/docs/components/Chip/
2. React Native Elements - https://reactnativeelements.com/docs

```
Note: To convert .css to react-native style you can use this - 
https://staxmanade.com/CssToReact/
```

# Navigation
**Setting up navigation**
1. https://reactnavigation.org/docs/getting-started/

**Setting up Native Stack**
Native Stack brings feel of native navigation to your Stack Navigator
Reference - https://reactnavigation.org/docs/native-stack-navigator

**Setting up Drawer Navigator**
Documentation - https://reactnavigation.org/docs/drawer-navigator/

Note - If you want to use reanimated v2 or above, do follow this installation guide - https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation

# Redux
Redux - is a global state management library

Without Redux -
Component - local state
Component - local state
Component - local state

With Redux -
Global State => Components
						 => Components
						 => Components

----------------------------------------------------------------

Redux = reducer + action + Store (which has initial state)

Reducer => 
1. Initial State
2. name
3. Actions => it is nothing but the function which manuplates the state

Action => 
it is nothing but the function which manuplates the state

Store =>
Multiple Reducers
* After creating store, the app need to be wrapped with it.
----------------------------------------------------------------

# Redux Persist
Please refer store.js for comments and example

# Publishing to Google Play Store
Ref - https://reactnative.dev/docs/signed-apk-android
Steps - 
1. Generate release keystore file and add it to your app folder
2. Configure your app/build.gradle with release config
3. run the release command - ./gradlew bundleRelease inside android folder
4. On successful build, aab will found in android/app/build/outputs/bundle/release/app-release.aab

# Publishing to App Store
1. 
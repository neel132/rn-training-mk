
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
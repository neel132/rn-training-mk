import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';


const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

/*
	// Syntax to call methods of a component.
	if(listRef.current) {
		listRef.current.scrollToEnd();
	}
*/
const CustomList = (props) => {
	const listRef = useRef(null);
	const {data} = props;
	useEffect(() => {
		setTimeout(() => {
			if(listRef.current) { // Always use if condition to avoid crash
				listRef.current.scrollToEnd({animated: true});
			}
		}, 2000);
	})
  return (
		<FlatList
			ref={listRef}
			data={data}
			renderItem={({item, index}) => <Item title={item.title} />}
			keyExtractor={item => item.id}
			horizontal={true}
			// inverted={true}
		/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CustomList;
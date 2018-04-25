/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  SectionList,
} from 'react-native';
import { Select, Option } from 'react-native-select-list';
//import { StackNavigator } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*const AppNavigator = StackNavigator({
  First: {
    screen: FirstScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});*/

type Props = {};
export default class FirstScreen extends Component<Props> {
/*  static navigationOptions = {
	  title: 'First',
  }*/
  
  constructor(props) {
    super(props)
    this.state = {text: ''};
  
  }
  
 /* componentDidMount(){
    const {navigate} = this.props.navigation;
    navigate('Second');
    }*/
	
  render() {
    return (
     <View style={styles.container}>
	<SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Devid']},
			{title: 'G', data: ['Geoge', 'Ginger']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
			{title: 'R', data: ['Racheal', 'Rendor']},
			{title: 'W', data: ['Wen Shen', 'Wendy']},
          ]}
          renderItem={({item}) =>
		<Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
		<TextInput
		  style={styles.textBox}
          placeholder='input here'
		  onChangeText={(text) => this.setState({text})}
          />
      <Text style={styles.display}>
        {this.state.text.split(' ').map((text) => text).join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    textBox: {
  padding: 10,
  fontSize: 10,
  },
  display: {
    margin: 10,
    padding: 10,
    fontSize: 11,
    color: 'Blue',
    backgroundColor: 'aqua',
  },
    container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'grey',//rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  click: {
  backgroundColor: 'aqua',
  },
});


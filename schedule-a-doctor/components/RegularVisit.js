import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Picker,FlatList,TouchableHighlight,Image,Alert,ImageBackground} from 'react-native';
import { Constants } from 'expo';
import DatePicker from 'react-native-datepicker'
import { StackNavigator } from 'react-navigation';
import * as ReactNavigation from 'react-navigation'
// You can import from local files
import RegularScreen from './RegularScreen.js';
// or any pure javascript modules available in npm
import { Card,Button,Fab,Icon } from 'native-base'; // Version can be specified in package.json
import FindoctorReg from './FindoctorReg.js';
import styles from '/style.js'
import DashBoard from './DashBoard.js'
export default class RegularVisit extends Component {
   constructor(props){
    super(props)
    this.state = {
     // datetime:"2016-05-15"
     language:'Cough',
      }
  }
   	onURGENT() {
    this.props.navigation.navigate('RegularScreen');
    //Alert.alert('You have selected UrgentRequest');
  }
  oniconbl()
  {
   this.props.navigation.navigate('DashBoard'); 
  }
  onicontl()
  {
    Alert.alert('Choose the symptom ypu are experiencing from the option available.tap the button Find a doctor to see the list of available doctor who treats your symptom');
  }
  render() {
    return (
      <View style={styles.container}>
     <View style={styles.buttonContainer}>
      <ImageBackground source={require('./BackgroundImg.png')}
style={styles.backgroundImage} >
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={this.onicontl.bind(this)}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>

          <View>
          <Text> {''}</Text>
          <Text> {''}</Text>
          <View style={styles.innercontainer}>
              
          
          <Text style={styles.paragraph}>
             
           What type of Symptom 
        </Text>
         <Text> {''}</Text>
        <Text style={styles.paragraph}>
            
             do you have?
        </Text>
         <Text> {''}</Text>
          <Text> {''}</Text>
         <View style={{height:200,width:'100%'}}>
          <Picker
  selectedValue={this.state.language}
  style={{  width: 300 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Abdomen pain" value="1Hour Before" />
  <Picker.Item label="Blood in nose" value="HOUR Before" />
  <Picker.Item label="Diarrhea" value="3OUR Before" />
  <Picker.Item label="Swallowing" value="4HOUR Before" />
  <Picker.Item label="Dizziness" value="5HOUR Before" />
  <Picker.Item label="Gas trouble" value="5HOUR Before" />
  <Picker.Item label="Skin Allergy" value="5HOUR Before" />
  <Picker.Item label="leg pain" value="5HOUR Before" />
  <Picker.Item label="Joins Pain" value="5HOUR Before" />
  <Picker.Item label="Cough" value="5HOUR Before" />
  
  <Picker.Item label="Fever" value="5HOUR Before" />
  

  
</Picker>
        </View>
         <Text> {''}</Text>
          
         <Button block rounded
          //title={'URGENT'}
           style={{alignItems: 'center',width:300,height:60,backgroundColor:'#43266E',alignSelf:'center'}}
           onPress={this.onURGENT.bind(this)}
        >
		<Text style={{color:'#fff',textAlign:'center'}}>    FIND A DOCTOR  </Text>
		</Button> 
            </View>
</View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={this.oniconbl.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]} onPress={this.onicontl.bind(this)}>
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
          </TouchableHighlight>
          </ImageBackground>
        </View>

        </View>
      
    );
  }
}



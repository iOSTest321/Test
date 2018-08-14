import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,Modal ,Picker,TouchableHighlight,Image,ImageBackground} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import {Button,Left,Right,Switch} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator } from 'react-navigation';
import Doctormenu from './Doctormenu.js'
import Dialog from "react-native-dialog";
import DatePicker from 'react-native-datepicker';
import styles from './style.js'
import DashBoard from './DashBoard.js';
export default class SetAlert extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
    time: '20:00',
    language: '10 minutes Before'
  };
  
iconbl(){
  Alert.alert('Select the settings of your alert and enable it not to miss the visit confirmed by doctor');
}
 	onURGENT() {
    this.props.navigation.navigate('Findoctor');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   //this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('VisitDoctor');
}
gohome()
{
  this.props.navigation.navigate('DashBoard'); 
}
  render() {
    return (
      
      <View style={styles.container}>
	   
     <View style={styles.buttonContainer}>
     <ImageBackground source={require('./BackgroundImg.png')}
style={styles.backgroundImage} >
     <TouchableHighlight style={[styles.cardButton, styles.topLeft]} >
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={this.iconbl.bind(this)}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <View style={styles.innercontainer}>
         <Text> {''}</Text>
 
           
            
        <Text style={styles.paragraph}>
          New Alert      </Text>
       
 
 
 <Text> {''}</Text>
   <View style={{flexDirection:'row',flexWrap:'wrap',}}>
    <View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'left'}}>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
      Today {' '}
        </Text>
         
 </View>
 <View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right'}}>
      <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
        03: 00 PM
        </Text>
        </View>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
             Dr. Jonson {'  '}
        </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Jonson Clinic
        </Text>
         <Text> {''}</Text>
         <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Starts Aug 11,2018 {' '}  3:00 PM
        </Text>
         <Text> {''}</Text>
         
         <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
          Ends Aug 11,2018 {' '}  7:00 PM
        </Text>
         <Text> {''}</Text>
         
        
     <View style={{flexDirection:'row',flexWrap:'wrap',}}>
          <View style={{flexDirection:'column',flexWrap:'wrap',}}>
    
          <Text  style={{textAlign:'left', fontSize:20,color:'#000'}}> Alert      </Text>
    
    
           </View>	
           <View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right'}}>
           <Switch  value={true} />
        </View>	       
          </View>	 
            <View style={{height:170,width:'100%'}}>   
        <Picker
  selectedValue={this.state.language}
  style={{ width: 300 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="1 HOUR Before" value="1Hour Before" />
  <Picker.Item label="2 HOUR Before" value="HOUR Before" />
  <Picker.Item label="1 Day Before" value="3OUR Before" />
  <Picker.Item label="2 Days Before" value="4HOUR Before" />
  <Picker.Item label="1 Week Before" value="5HOUR Before" />
  
</Picker>
</View>
         
      <Button block rounded
            
              style={{alignItems: 'center',width:300,backgroundColor:'#43266E',alignSelf:'center'}} 
              onPress={this.gohome.bind(this)}>
              <Text style={{textAlign:'center',color:'#fff'}}>     SAVE  </Text>
            </Button>
       						</View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}  onPress={this.close.bind(this)}>
            <Image
              source={require('./bleft.png')} 
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]}onPress={this.iconbl.bind(this)} >
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
import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,Modal ,TouchableHighlight,Image} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator } from 'react-navigation';
import SetAlert from './SetAlert.js'
import Dialog from "react-native-dialog";
import styles from '/style.js'
export default class VisitDoctorPre extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
alert()
{
   //this.setModalVisible(true);


 this.props.navigation.navigate('SetAlert');
}
 	onURGENT() {
    this.props.navigation.navigate('FindoctorPre');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('selectdr');
}
onicontr()
{
  Alert.alert('Choose the desired date and time of your visit to a doctor and tap the button to see list of available doctor on that date nearby')
}

  render() {
    return (
      <View style={styles.container}>
	   
     <View style={styles.buttonContainer}>
     <TouchableHighlight style={[styles.cardButton, styles.topLeft]} onPress={this.alert.bind(this)}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={this.onicontr.bind(this)}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <View style={styles.innercontainer}>
         <Text> {''}</Text>
 
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
            <Text> {''}</Text>
            
        <Text style={styles.paragraph}>
          Confirmed visit details       </Text>
        <Text> {''}</Text>
      <Text> {''}</Text>
 
 <Text> {''}</Text>
 
 <Text> {''}</Text>
    <View style={{flexDirection:'column',flexWrap:'wrap',}}>
        <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
     Day of visit : Today
        </Text>
         <Text> {''}</Text>
 
      <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
        Time : 03: 00 PM
        </Text>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
             Doctor Name: Dr. James {'  '}
        </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
          Clinic Name: James Poly Clinic
        </Text>
        <Text> {''}</Text>
 
     
    <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
        Status : Confirmed
        </Text>
      <Text> {''}</Text>
      <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
        Visit Type: Preventative
        </Text>
         <Text> {''}</Text>
         <Text> {''}</Text>
 
 
     <TouchableOpacity >
    <Button 
          //title={'URGENT'}
          onPress={this.alert.bind(this)}
         style={{alignItems: 'center',width:150,backgroundColor:'#43266E',alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>         Set An alert </Text>
          </Button>
        </TouchableOpacity>
       
			 																			
			 
				
	       
      </View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} >
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]} onPress={this.onicontr.bind(this)}>
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
          </TouchableHighlight>
        </View>
      </View>
        
    );
  }
}

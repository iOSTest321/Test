import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,TouchableOpacity,Modal,TouchableHighlight,Image,Platform } from 'react-native';
import { Constants, MapView, Location, Permissions , Notifications} from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator } from 'react-navigation';
import VisitDoctorPre from './VisitDoctorPre.js'
import FindoctorRating from './FindoctorRating.js'

import Dialog from "react-native-dialog";
import styles from './style.js';
export default class ConfirmVisitPre extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
alert()
{
   //this.setModalVisible(true);


 this.props.navigation.navigate('VisitDoctorPre');
}
alertback()
{
  this.props.navigation.navigate('FindoctorRating');

}
oniconbl(){
  Alert.alert('Review the urgent details you want to schedule and tap the button to send request to doctor selected');
}
 	onURGENT() {
    this.props.navigation.navigate('FindoctorRating');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('selectdr');
}

  render() {
    return (
      <View style={styles.container}>
	     <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={this.oniconbl.bind(this)}>
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
          Urgent visit       </Text>
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
          {' '}
        </Text>
      <Text> {''}</Text>
         <Text> {''}</Text>
         <Text> {''}</Text>
 
     <TouchableOpacity >
    <Button 
          //title={'URGENT'}
          onPress={this.alert.bind(this)}
         style={{alignItems: 'center',width:150,backgroundColor:'#43266E',alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>         Send Request</Text>
          </Button>
        </TouchableOpacity>
       </View>
       <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={this.alertback.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]} onPress={this.oniconbl.bind(this)}>
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


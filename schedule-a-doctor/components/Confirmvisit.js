import React, { Component } from 'react';
import { Text, View, StyleSheet,Alert,ImageBackground,TouchableOpacity,Modal,TouchableHighlight,Image,Platform } from 'react-native';
import { Constants, MapView, Location, Permissions , Notifications} from 'expo';
import { Card } from 'react-native-elements';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { StackNavigator ,NavigationActions } from 'react-navigation';
import VisitDoctor from './VisitDoctor.js'
import Findoctor from './Findoctor.js'


import Dialog from "react-native-dialog";
import styles from './style.js';
async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}
export default class Confirmvisit extends Component {
  state = {
    dialogVisible: false,
    modalVisible: false,
  };
  
alert()
{
   //this.setModalVisible(true);


 this.props.navigation.navigate('VisitDoctor');
}
alertback()
{
  this.props.navigation.navigate('Findoctor');

}
oniconbl(){
  Alert.alert('Review the urgent details you want to schedule and tap the button to send request to doctor selected');
}
 	onURGENT() {
    this.props.navigation.navigate('Findoctor');
    //Alert.alert('You have selected UrgentRequest');
  }
  close()
{
   this.setModalVisible(!this.state.modalVisible);
 this.props.navigation.navigate('selectdr');
}
_handleButtonPress = () => {
      
    const localnotification = {
      title: 'Visit Confirmed by Doctor!',
      body: 'Appointment fixed ',
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };
    let sendAfterFiveSeconds = Date.now();
    sendAfterFiveSeconds += 3000;

    const schedulingOptions = { time: sendAfterFiveSeconds };
    Notifications.scheduleLocalNotificationAsync(
      localnotification,
      schedulingOptions
    );
  };
  
  listenForNotifications = () => {
    Notifications.addListener(notification => {
      if (notification.origin === 'received' ) {
       
       const { navigate } = this.props.navigation;
       navigate('VisitDoctor', { data: notification })
        //Alert.alert('Visit Confirmed');
      }
    });
  };
  
  componentWillMount() {
    getiOSNotificationPermission();
    this.listenForNotifications();
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
            
        <Text style={styles.paragraph}>
          Urgent visit        </Text>
        <Text> {''}</Text>
      <Text> {''}</Text>
 
 
 
 <Text> {''}</Text>
 <View style={{flexDirection:'row',flexWrap:'wrap',}}>
    <View style={{flexDirection:'column',flexWrap:'wrap',}}>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
      Today  {''}
        </Text>
        </View>
        <Text style={{textAlign:'center', fontSize:20,color:'#000'}}>
    {''}
        </Text>
        <View style={{flexDirection:'column',flexWrap:'wrap',}}>
      <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
         03: 00 PM
        </Text>
        </View>
        </View>
        <Text> {''}</Text>
 
      <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
             Dr. Jonsan      </Text>
        <Text> {''}</Text>
 
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
         Jonsan Clinic
        </Text>
         <Text> {''}</Text>
         <Text> {''}</Text>
 
     <TouchableOpacity >
    <Button block rounded    //title={'URGENT'}
          onPress={this._handleButtonPress}
         style={{alignItems: 'center',width:300,backgroundColor:'#43266E',height:60,alignSelf:'center'}}
          >
          <Text style={{color:'#fff',textAlign:'center'}}>  SEND REQUEST</Text>
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
          </ImageBackground>
        </View>
      </View>
        
    );
  }
}


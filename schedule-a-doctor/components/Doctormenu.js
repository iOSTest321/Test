import React from 'react';
import { StyleSheet, Text, View,Alert ,TouchableHighlight,Image} from 'react-native';
import {Button} from 'native-base';
import * as ReactNavigation from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import UrgentScreen from './UrgentScreen.js';
import VisitDoctor from './VisitDoctor.js';
import selectdr from './selectdr.js';
import RegularVisit from './RegularVisit.js';

import styles from './style.js'

export default class Doctormenu extends React.Component <props>{
	
	onURGENT() {
    this.props.navigation.navigate('VisitDoctor');
    //Alert.alert('You have selected UrgentRequest');
  }
  onPREVENTATIVE() {
    this.props.navigation.navigate('selectdr');
    //Alert.alert('You have selected PREVENTATIVE Request');
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
         >
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <View style={styles.innercontainer}>
            <Text> {''}</Text>
            <Text> {''}</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
             Doctor Allocation
            </Text>
            <Text> {''}</Text>
            <Text> {''}</Text>
            <Button
              // title={'URGENT'}
             style={{alignItems: 'center',width:150,backgroundColor:'#43266E',    alignSelf:'center'}}
             >
              <Text style={{textAlign:'center',color:'#fff'}}>   VisitConfirmed </Text>
            </Button>
            <Text> {''}</Text>
            <Text> {''}</Text>
            
            <Button
              //title={'PREVENTATIVE'}
              style={{alignItems: 'center',width:150,backgroundColor:'#43266E',alignSelf:'center'}} 
               onPress={this.onURGENT.bind(this)}>
              <Text style={{textAlign:'center',color:'#fff'}}>           View </Text>
            </Button>
            <Text> {''}</Text>
            <Text> {''}</Text>
          </View>

          <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]}  >
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

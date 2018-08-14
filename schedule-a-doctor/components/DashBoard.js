import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { Button } from 'native-base';
import * as ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import UrgentScreen from './UrgentScreen.js';
import UrgentVisit from './UrgentVisit.js';
import Findoctor from './Findoctor.js';
import FindoctorRating from './FindoctorRating.js';
import RegularVisit from './RegularVisit.js';
import Confirmvisit from './Confirmvisit.js';
import Card from 'react-native-elements';
import PropTypes from 'prop-types'; // Version can be specified in package.json
import style from './style';
const flip = {
  0: {
    rotateY: '0deg',
  },
  1: {
    rotateY: '180deg',
  },
};
export default class DashBoard extends React.Component<props> {
  constructor() {
    super();
    this.state = {
      isFlipping: false,
      isFront: true,
    };
  }
   handleRotate = () => {
    this.setState({
      isFlipping: true,
      isFront: !this.state.isFront,
    });
    setTimeout(() => {
      this.setState({ isFlipping: false });
    }, 1000);
  };

  onURGENT() {
    this.props.navigation.navigate('UrgentScreen');
    //Alert.alert('You have selected UrgentRequest');
  }
   onicontr() {
    //this.props.navigation.navigate('UrgentScreen');
    Alert.alert('Select how urgently you want to schedule a visit to doctor from the options available');
  }
  onPREVENTATIVE() {
    this.props.navigation.navigate('UrgentVisit');
    //Alert.alert('You have selected PREVENTATIVE Request');
  }
  onREGULAR() { 
    this.props.navigation.navigate('RegularVisit');
   // Alert.alert('You have selected REGULAR Request');
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
           onPress={this.onicontr.bind(this)}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <Text> {''}</Text>
          <View style={styles.innercontainer}>
            
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Schedule A Visit
            </Text>
            <Text> {''}</Text>
            <Text> {''}</Text>

            <Image
              source={require('./logo.jpg')}
              style={{
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <Text> {''}</Text>
            <Text> {''}</Text>
            <Text> {''}</Text>
            <Button block  rounded
              // title={'URGENT'}
             style={{alignItems: 'center',width:300,height:60,textAlign:'center',backgroundColor:'#43266E',alignSelf:'center'}}
              onPress={this.onURGENT.bind(this)}>
              <Text style={{textAlign:'center',color:'#fff'}}> URGENT </Text>
            </Button>
            <Text> {''}</Text>
            <Text> {''}</Text>
            
            <Button block rounded
              //title={'PREVENTATIVE'}
              style={{alignItems: 'center',width:300,textAlign:'center',height:60,backgroundColor:'#43266E',alignSelf:'center'}}            
               onPress={this.onPREVENTATIVE.bind(this)}>
              <Text style={{textAlign:'center',color:'#fff'}}> PREVENTATIVE </Text>
            </Button>
            <Text> {''}</Text>
            <Text> {''}</Text>
          
          
              <Button  block rounded
              //title={'REGULAR'}
              style={{alignItems: 'center',width:300,textAlign:'center',height:60,backgroundColor:'#43266E',alignSelf:'center'}}
              onPress={this.onREGULAR.bind(this)}>
              <Text style={{textAlign:'center',color:'#fff',alignItems:'center'}}> REGULAR </Text>
            </Button>
         
          </View>

          <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.bottomRight]}  onPress={this.onicontr.bind(this)}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9efef',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  innercontainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    //height: 200,
  },
 
  topLeft: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 10,
    top: 0,
    left: 0,
  },
  topRight: {
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    top: 0,
    right: 0,
  },
  buttonContainer: {
    width: '90%',
    height: '90%',
   // paddingTop:10,
     backgroundColor: '#fff',
    justifyContent:'center',
   // position: 'absolute',
    alignItems: 'center',
  },
  bottomLeft: {
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 40,
    bottom: 0,
    right: 0,
  },
  cardButton: {
    width: 45,
    height: 45,
    backgroundColor: 'lightgray',
    position: 'absolute',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#006600',
    shadowOpacity: 0.2,
  },
  buttonIconTopleft: {
    top: 10,
    left: 10,
    width: 25,
    height: 25,
  }, 
  buttonIconTopRight: {
    bottom: -10,
    right: -15,
    width: 30,
    height: 30,
  },
  buttonIconBottomleft: {
    bottom: -15,
    left: 10,
    width: 30,
    height: 30,
  },backgroundImage: {
flex: 1,
width: '100%',
height: '100%',
paddingTop:5,
alignItems:'center',
},

  buttonIconBottomRight: {
    bottom: -15,
    right: -15,
    width: 30,
    height: 30,
  },
});
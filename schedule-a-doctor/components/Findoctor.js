import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,FlatList,TouchableHighlight,Image,Alert,ImageBackground} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import Confirmvisit from './Confirmvisit.js';
import * as ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import styles from './style.js'
import selectdr from './selectdr.js'
import UrgentScreen from './UrgentScreen.js'

const clinicdetails=[
{
"doctorname":"Dr.Johnson",
"clinicname":"Jonsan Clinic",
"duration":"0.5 km",
"time":"3:00 PM",
latitude:12.9754,
longitude:80.2206,
latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
  title:'Jonsan Clinic',
  route:'Confirmvisit'
   

},

{
"doctorname":"Dr.Ellens",
"clinicname":"Edward Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Thomas Clinic',
   route:'selectdr'
},{
"doctorname":"Dr.Nelson",
"clinicname":"Nelson Clinic",
"duration":"1.5 km",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Nelson Clinic',
   route:'selectdr'
},
{
"doctorname":"Dr.Marvel",
"clinicname":"Marvel Clinic",
"duration":"0.2 km",
"time":"1:00 PM",
 latitude:12.9000,
 longitude:80.2709,
 latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
 title:'Marvel Clinic',
 route:'Confirmvisit'
}
];
export default class Findoctor extends Component {
  


onURGENT(name)
{
this.props.navigation.navigate('Confirmvisit');
}
  
  onicontl()
  {
    
    Alert.alert('See the list of all doctors available on your desired date and time of visit nearby, Tap any doctors to see the details');
  }
  oniconbl()
  {
    //this.props.navigation.navigate('UrgentScreen');//
    Alert.alert('Choose the desired date and time of your visit to doctor and tap the buttton to see available doctors');
  }

  onnotify()
  {
this.props.navigation.navigate('selectdr');
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
onPress={this.onicontl.bind(this)}
           >
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>

          
          <View style={[styles.innercontainer,{alignItems:'center',}]}>
          <Text> {''} </Text>
          <Text> {'' }</Text>
          
           <Text style={styles.paragraph}>
             Doctors Nearby       </Text>
          <Text> {''} </Text>
          <Text> {'' }</Text>
           <Text> {''} </Text>
<TouchableOpacity onPress={this.onnotify.bind(this)}>
        <View  style={{flexDirection:'row',flexWrap: 'wrap',alignSelf:'center'}}>
				<View style={{flexDirection:'column',alignItems:'left',flexWrap:'wrap',alignSelf:'left'}}>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									Dr.Alicee
									</Text>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									Thomas Clinic {' '}
									</Text>
									 <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
        <View style={{flexDirection:'column',alignItems:'center',flexWrap:'wrap',alignSelf:'left'}}>
         <Text> {''} </Text>
          <Text> {'' }</Text>
          <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
				<View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right',aignSelf:'right'}}>
										<Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
									1:00 	PM								</Text>
									<Text style={{textAlign:'right', fontSize:20,color:'#000'}}> 
									5 km
									</Text>
                   <Text> {''} </Text>
          <Text> {'' }</Text>
						</View>
						</View>		
          </TouchableOpacity>
          
          <FlatList style={{width:'100%', height:'50%'}}
          data={clinicdetails} 
          renderItem={({item}) =>
          <TouchableOpacity onPress={this.onURGENT.bind(this)} >
          <View  style={{flexDirection:'row',flexWrap: 'wrap',alignSelf:'center'}}>
				<View style={{flexDirection:'column',alignItems:'left',flexWrap:'wrap',alignSelf:'left'}}>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									{item.doctorname} 
									</Text>
									<Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
									{item.clinicname} {' '}
									</Text>
									 <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
        <View style={{flexDirection:'column',alignItems:'center',flexWrap:'wrap',alignSelf:'left'}}>
         <Text> {''} </Text>
          <Text> {'' }</Text>
          <Text> {''} </Text>
          <Text> {'' }</Text>
				</View>
				<View style={{flexDirection:'column',flexWrap:'wrap',alignItems:'right',aignSelf:'right'}}>
										<Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
									{item.time}
									</Text>
									<Text style={{textAlign:'right', fontSize:20,color:'#000'}}> 
									{item.duration}
									</Text>
                   <Text> {''} </Text>
          <Text> {'' }</Text>
						</View>
						</View>		
           </TouchableOpacity>
           }
        />
           
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

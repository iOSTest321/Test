import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,TouchableHighlight,Image,Alert,ImageBackground} from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import { scale, moderateScale, verticalScale } from 
'react-native-size-matters';
import Confirmvisit from './Confirmvisit.js';
import * as ReactNavigation from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import styles from './style.js'
import UrgentScreen from './UrgentScreen.js'
let region2 = {
				latitude: 20.593684,
				longitude: 78.962880,
				latitudeDelta:  0.2,
				longitudeDelta:0.2 ,
		   	};
const clinicdetails=[
{
"doctorname":"Dr.James",
"clinicname":"John Clinic",
"duration":"0.5 min",
"time":"3:00 PM",
latitude:12.9754,
longitude:80.2206,
latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
  title:'John Clinic'
   

},
{
"doctorname":"Dr.Alice",
"clinicname":"Thomas Clinic",
"duration":"1.5 min",
"time":"2:00 PM",
 latitude:12.9010,longitude:80.2279,latitudeDelta:  0.2,
	longitudeDelta:0.2 ,
   title:'Thomas Clinic'
},
{
"doctorname":"Dr.Neutron",
"clinicname":"Alpha Clinic",
"duration":"0.2 min",
"time":"1:00 PM", latitude:12.9000,longitude:80.2709,latitudeDelta:  0.2,
	longitudeDelta:0.2 , title:'Alpha Clinic'
}
];
export default class FindoctorRating extends Component {
  state = {
    mapRegion: null,
    mapRegion1:{latitude:12.9754,longitude:80.2206},
    mapRegion2:{latitude:12.9010,longitude:80.2279},
    hasLocationPermissions: false,
    locationResult: null
  };


onURGENT()
{
this.props.navigation.navigate('Confirmvisit');
}
  componentDidMount() {
    this._getLocationAsync();
  }
  onicontl()
  {
    Alert.alert('See the list of all doctors available on your desired date and time of visit nearby, Tap any doctors to see the details');
  }
  oniconbl()
  {
    this.props.navigation.navigate('UrgentScreen');//Alert.alert('Choose the desired date and time of your visit to doctor and tap the buttton to see available doctors');
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   
   // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
  };

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

          
          <View style={styles.innercontainer}>
          <Text> {''} </Text>
          <Text> {''} </Text>
          
        <Text style={styles.paragraph}>
          Select Doctors Nearby you!
        </Text>
           <Text> {''} </Text>
        {
          this.state.locationResult === null ?
          <Text>Finding your nearest clinic location...</Text> :
          this.state.hasLocationPermissions === false ?
            <Text>Location permissions are not granted.</Text> :
            this.state.mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={{ alignSelf: 'stretch', height:200 ,width:350}}
              region={clinicdetails[0]}
              onRegionChange={(region)=>{
													
													region2=region;
												
											}
										}		
            >
            {clinicdetails.map(dashData => (
            <MapView.Marker
      coordinate={dashData}
      title={dashData.title}
      //description="Thuraipakkam"
    />
     ))}
        </MapView>
        }
		
    </View>
    <Text> {'' }</Text>		
		<View style={{ alignItems:'flex-start',height:200,justifyContent:'center'}}>
         <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
          {''}
        </Text>
        {clinicdetails.map(item =>(
       <TouchableOpacity  onPress={this.onURGENT.bind(this)}>
        <View  style={{flexDirection:'row',flexWrap:'wrap',borderBottomWidth:1}}>
        <View style={{flexDirection:'column',flexWrap:'wrap',}}>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
        {item.doctorname}
        </Text>
        <Text style={{textAlign:'left', fontSize:20,color:'#000'}}>
        {item.clinicname}
        </Text>
        </View>
        <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
          {''}
        </Text>
        
        <View style={{flexDirection:'column',flexWrap:'wrap',}}>
        <Text style={{textAlign:'right', fontSize:20,color:'#000'}} >
        {item.time}
        </Text>
        <Text style={{textAlign:'right', fontSize:20,color:'#000'}}>
          {item.duration}
        </Text>
        </View>
      </View>
       </TouchableOpacity>
        ))
        }
	          
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


import React from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DashBoard from './components/DashBoard';
import UrgentScreen from './components/UrgentScreen';
import UrgentVisit from './components/UrgentVisit';
import RegularVisit from './components/RegularVisit';
import FindoctorReg from './components/FindoctorReg';
import Findoctor from './components/Findoctor';
import Confirmvisit from './components/Confirmvisit';
import ConfirmVisitPre from './components/ConfirmVisitPre';
import ConfirmVisitReg from './components/ConfirmVisitReg';
import selectdr from './components/selectdr.js';
import Doctormenu from './components/Doctormenu.js';
import VisitDoctor from './components/VisitDoctor.js';
import VisitDoctorPre from './components/VisitDoctorPre.js';
import VisitDoctorReg from './components/VisitDoctorReg.js';
import SetAlert from './components/SetAlert.js';
import Card from './components/Card.js';
import FindoctorRating from './components/FindoctorRating.js';
import RegularScreen from './components/RegularScreen.js';

const AppNavigator = StackNavigator(
  {
    DashBoard: { screen: DashBoard },
    UrgentScreen: { screen: UrgentScreen },
    RegularScreen: { screen: RegularScreen },
    UrgentVisit: { screen: UrgentVisit },
    Findoctor: { screen: Findoctor },
    Confirmvisit: { screen: Confirmvisit },
     Doctormenu: { screen: Doctormenu },
      VisitDoctor: { screen: VisitDoctor },
      SetAlert: { screen: SetAlert },
    ConfirmVisitPre: { screen: ConfirmVisitPre },
    ConfirmVisitReg: { screen: ConfirmVisitReg },
    selectdr: { screen: selectdr },
    VisitDoctorPre: { screen: VisitDoctorPre },
    VisitDoctorReg: { screen: VisitDoctorReg },
    
    Card: { screen: Card },
    RegularVisit: { screen: RegularVisit },
    FindoctorReg: { screen: FindoctorReg },
    FindoctorRating: { screen: FindoctorRating },
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
     // headerStyle: {backgroundColor: '#4C3E54', alignItems:'center'},
      title: 'Schedule A Doctor',
      headerTintColor: '#000',
      gesturesEnabled: false,
      headerLeft: null,
      //headerRight:alarmIcon(navigation)
    }),
  }
);
export default class App extends React.Component {
  render() {
    
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },*/
});

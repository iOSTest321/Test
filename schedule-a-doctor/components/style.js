import { StyleSheet } from 'react-native';

const colors = {
  buttonBg: '#E9EBFF',
  buttonShadow: '#000',
  white: '#FFF'
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9efef',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
    paddingBottom:10,
    width: '100%',
    height: '100%',
    alignSelf:'center',
    position: 'absolute',
  },paragraph: {
   // margin: 24,//
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  flipCard1 :{
    backfaceVisibility: 'hidden',
  },
  flipCardBack1 : {
    backgroundColor: "red",

    position: "absolute",
    top: 0,
  },
  innercontainer: {
    backgroundColor: 'transparent',
   // alignItems: 'center',
    justifyContent: 'center',
  
    //height: 200,
  },
  item: {
    color: '#fff',
    marginLeft:5,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: '700',
  },

  input: {
    width: 150,
    height: 44,
        marginLeft:5,
    alignSelf:'center',
    textAlign:'center',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    //marginBottom: 10,
    backgroundColor: '#43266E',
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
    backgroundColor:'#fff',
    //position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
   // paddingTop:10,
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
  },

  buttonIconBottomRight: {
    bottom: -15,
    right: -15,
    width: 30,
    height: 30,
  },backgroundImage: {
flex: 1,
width: '100%',
height: '100%',
paddingTop:5,
alignItems:'center',
},
});

export default styles;

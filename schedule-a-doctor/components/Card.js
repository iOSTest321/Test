import React from 'react'
import PropTypes from 'prop-types'; // Version can be specified in package.json
import { View, TouchableHighlight ,Text,Image} from 'react-native'
//import FIcon from '@expo/react-native-vector-icons/Feather'; // 5.0.0
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'; // Version can be specified in package.json
import style from './style';

const CardButtons = props => {
  return (
    <View style={style.buttonContainer}>
    
      <TouchableHighlight style={[style.cardButton, style.topLeft]}>
       <Image source={require('./logo.jpg')}
          style={style.buttonIconTopleft}
          />
      </TouchableHighlight>
      <TouchableHighlight style={[style.cardButton, style.topRight]}>
        <Image source={require('./logo.jpg')} 
          style={style.buttonIconTopRight}
        />
      </TouchableHighlight>
      <TouchableHighlight style={[style.cardButton, style.bottomLeft]}>
        <Image source={require('./logo.jpg')} 
          style={style.buttonIconBottomleft}
         
        />
      </TouchableHighlight>
      <TouchableHighlight style={[style.cardButton, style.bottomRight]}>
        <Image source={require('./logo.jpg')}
          style={style.buttonIconBottomRight}
         
        />
      </TouchableHighlight>
    </View>
  )
}

CardButtons.defaultProps = {
  buttons: {
    topLeft: {
      disabled: false,
      action: null
    },
    topRight: {
      disabled: false,
      action: null
    },
    bottomLeft: {
      disabled: false,
      action: null
    },
    bottomRight: {
      disabled: false,
      action: null
    },
  }
};

CardButtons.propTypes = {
  flip: PropTypes.func,
  buttons: PropTypes.shape({
    topLeft: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    topRight: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    bottomLeft: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    }),
    bottomRight: PropTypes.shape({
      disabled: PropTypes.bool,
      action: PropTypes.string
    })
  })
};

export default CardButtons;

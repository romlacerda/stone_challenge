import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import style from '../style/main'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default props =>  {

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          props.value,
      });
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View style={style.fact_box}>
        <Text style={props.value.length > 80 ? style.fontMore80 : style.fontLess80}>{props.value}</Text>
        <View style={style.fact_tag_container}>
            <TouchableOpacity style={style.tag_button_home}>
                <Text style={style.tag_button_font}>{props.categories.length > 0 ? props.categories[0] : 'UNCATEGORIZED'}</Text>
            </TouchableOpacity>
            <Icon style={style.share_icon} name="share" size={30} onPress={onShare} />
        </View>
    </View>
  )
}
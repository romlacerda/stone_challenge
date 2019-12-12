import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Share, Button } from 'react-native'
import style from '../style/main'
import Icon from 'react-native-vector-icons/MaterialIcons';

onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

export default props => 
    <View style={style.fact_box}>
        <Text style={props.value.length > 80 ? style.fontMore80 : style.fontLess80}>{props.value}</Text>
        <View style={style.fact_tag_container}>
            <TouchableOpacity style={style.tag_button_home}>
                <Text style={style.tag_button_font}>{props.categories.length > 0 ? props.categories[0] : 'UNCATEGORIZED'}</Text>
            </TouchableOpacity>
            <Icon style={style.share_icon} name="share" size={30} onPress={onShare} />
        </View>
    </View>


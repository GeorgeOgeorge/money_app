import { React } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import styles from './style';


const Header = () => {
  return (
    <View style={styles.scaffold}>
      <Text style={styles.text}>Hello, Teja 👋</Text>
      <TouchableOpacity style={styles.circleIcon}>
        <FontAwesome name={'user'} style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
